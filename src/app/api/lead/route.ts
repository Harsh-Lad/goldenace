import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract the form data
    const { firstName, lastName, email, phone, companyName } = body;
    
    // Get the service account key from environment variable
    const keyString = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_KEY;
    
    if (!keyString) {
      throw new Error('Google service account key not found in environment variables');
    }
    
    // Parse the JSON string from the environment variable
    const credentials = JSON.parse(keyString);
    
    // Authenticate with Google Sheets API using credentials from env var
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Current timestamp
    const timestamp = new Date().toISOString();
    
    // Append data to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'get_in_touch', // Update this to your sheet name if different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          firstName,
          lastName,
          email,
          phone,
          companyName,
          timestamp
        ]],
      },
    });
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form data submitted successfully',
      rows: response.data.updates?.updatedRows || 0,
    });
    
  } catch (error) {
    // Log the detailed error
    console.error('Error submitting lead:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit lead information',
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}