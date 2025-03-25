import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

// Import service account key directly
const keyFilePath = path.join(process.cwd(), 'key.json');

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Extract form data
    const { name, email, message } = body;

    // Read and parse the service account key file
    const keyFileContent = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

    // Authenticate with Google Sheets API using key file
    const auth = new google.auth.GoogleAuth({
      credentials: keyFileContent,
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
