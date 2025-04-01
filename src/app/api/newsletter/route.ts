import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get the service account key from environment variable
    const keyString = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_KEY;
    
    if (!keyString) {
      throw new Error('Google service account key not found in environment variables');
    }
    
    // Parse the JSON string from the environment variable
    const credentials = JSON.parse(keyString);

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID;

    // First, check if email already exists in Sheet3
    const checkResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'newsletter!A:A', // Column containing emails
    });

    const existingEmails = checkResponse.data.values || [];
    const isEmailRegistered = existingEmails.some(row => row[0] === email);

    if (isEmailRegistered) {
      return NextResponse.json({
        success: false,
        message: 'Email is already subscribed to the newsletter',
      });
    }

    // If email doesn't exist, add it to Sheet3
    const timestamp = new Date().toISOString();
    
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'newsletter',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter',
      rows: appendResponse.data.updates?.updatedRows || 0,
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process newsletter subscription',
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}