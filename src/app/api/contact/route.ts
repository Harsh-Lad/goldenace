import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Extract form data
    const { name, email, message } = body;

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

    // Append data to **Sheet2**
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Sheet2', // Changed from Sheet1 to Sheet2
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, timestamp]],
      },
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form data submitted successfully to Sheet2',
      rows: response.data.updates?.updatedRows || 0,
    });

  } catch (error) {
    console.error('Error submitting contact form data:', error);

    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit contact information',
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}