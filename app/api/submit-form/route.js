import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, representing, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !representing) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Set up auth and append to sheet
    // Use service account or OAuth2 credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // Prepare the data to be inserted
    const values = [
      [name, email, phone, representing, message, new Date().toISOString()],
    ];

    // Append data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });

    return NextResponse.json({
      message: "Form data submitted successfully",
      response: response.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Error submitting form data", error: error.message },
      { status: 500 }
    );
  }
}
