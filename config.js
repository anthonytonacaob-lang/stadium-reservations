// Configuration file bridging your GitHub-hosted frontend to your Google Apps Script API
// Replace the placeholder below with your active Web App URL from Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbwILx1kguySFm0GqOohZwhREqvy7H6k4gupgRjDIyFl3B6oFvBIMLwTuqjSExQOng0tMQ/exec";

/**
 * Standard Fetch API Helper to communicate with Google Apps Script
 * @param {string} action - The action endpoint inside Code.gs (e.g., 'getActiveBookings', 'submitBooking')
 * @param {object} payload - The data structure passed to the backend
 * @returns {Promise<object>} JSON response from the Apps Script API
 */
async function callAPI(action, payload = {}) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8" // Plain text headers prevent CORS preflight OPTIONS blocks on GAS
            },
            body: JSON.stringify({ action, payload })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (err) {
        console.error("API Communication Error:", err);
        return { success: false, msg: "Failed to communicate with the database backend." };
    }
}
