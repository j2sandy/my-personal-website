// services/ShlokaService.js
export async function fetchShloka() {
  try {
    const response = await fetch("https://shloka.onrender.com/api/v1/bahgavad_gita/random");
    if (!response.ok) throw new Error("Failed to fetch shloka");
    return await response.json();
  } catch (error) {
    console.error("Shloka fetch failed:", error);
    return {
      Shloka: "श्लोक प्राप्त नहीं हो पाया। कृपया पुनः प्रयास करें।",
      Chapter: "",
      "Verse No": "",
      Explanation: "",
      "English Translation": ""
    };
  }
}
