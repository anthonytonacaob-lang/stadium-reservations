const API_URL = "https://script.google.com/macros/s/AKfycbwILx1kguySFm0GqOohZwhREqvy7H6k4gupgRjDIyFl3B6oFvBIMLwTuqjSExQOng0tMQ/exec";

// Standard Fetch Handler with CORS configuration
async function callAPI(action, payload = {}) {
    const response = await fetch(API_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8" // Avoids CORS preflight blocks
        },
        body: JSON.stringify({ action, payload })
    });
    return await response.json();
}
