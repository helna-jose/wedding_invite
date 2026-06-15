import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    // Check if the script URL is configured in environment variables
    if (!scriptUrl) {
      console.log("Mock RSVP Submission (GOOGLE_SHEETS_SCRIPT_URL not configured):", body);
      
      // We simulate a successful database write locally so testing does not break
      return NextResponse.json({ 
        success: true, 
        message: "Development mode: RSVP printed to console because GOOGLE_SHEETS_SCRIPT_URL environment variable is not set." 
      });
    }

    // Proxy the request to the Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned status ${response.status}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || "Failed to write row in Google Sheet");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("RSVP Proxy Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}
