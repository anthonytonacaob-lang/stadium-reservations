const API_URL = "https://script.google.com/macros/s/AKfycbz7H2yDKGfbr7tQG1Wx-GJOh_yML2j250C9EUfpwNGmXO4eYSUItGGNUA-7HXfiMnSB/exec";

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