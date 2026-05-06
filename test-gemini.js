async function testGemini() {
  const GEMINI_KEY = 'AIzaSyDbe44HmePhBWC0uLkPuDe3BSCnGJ2YlV4';
  const prompt = "Say hello";
  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );
    const data = await geminiRes.json();
    console.log("Status:", geminiRes.status);
    if (!geminiRes.ok) {
      console.log("Error:", data.error.message);
    } else {
      console.log("Success:", data.candidates[0].content.parts[0].text);
    }
  } catch (e) {
    console.error("Fetch error:", e);
  }
}

testGemini();
