// Google Sheets Integration Utility
// Paste your published Google Apps Script Web App URL below:
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2vHxnBwWe4ekTDwDjbxkVq7-o8hM10cMH0-A9EpW4G2H8OIyktCxXHLmHnFzsHjgQ7g/exec';

export interface FormSubmissionData {
  name: string;
  phone: string;
  slot: string;
  date: string;
  age?: string;
  formSource?: string;
}

/**
 * Sends form submission data to Google Sheets via Google Apps Script Web App URL
 */
export async function sendToGoogleSheet(data: FormSubmissionData): Promise<boolean> {
  const scriptUrl = GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.log('Google Script URL is not configured yet. Form submission data:', data);
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: data.name,
      phone: data.phone,
      age: data.age || 'N/A',
      date: data.date,
      slot: data.slot,
      formSource: data.formSource || 'General Consultation Registration'
    };

    // Send payload using text/plain in no-cors mode to safely bypass browser CORS restrictions
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return true;
  } catch (error) {
    console.error('Error submitting form data to Google Sheets:', error);
    return false;
  }
}
