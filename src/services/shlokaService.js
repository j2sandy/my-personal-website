// services/shlokaService.js

const SHLOKA_API_URL = 'https://shloka.onrender.com/api/v1/bahgavad_gita/random';
const IMAGE_API_URL = 'https://source.unsplash.com/800x400/?sanskrit,temple,yoga,india';

const fallbackShloka = {
  text: "सा विद्या या विमुक्तये ।",
  translation: "That is knowledge which liberates.",
  imageUrl: '/fallbacks/shloka.jpg',
};

export async function fetchDailyShloka() {
  let shlokaText = fallbackShloka.text;
  let translation = fallbackShloka.translation;

  try {
    const response = await fetch(SHLOKA_API_URL);
    if (!response.ok) throw new Error('Shloka fetch failed');
    const data = await response.json();

    if (data?.slok) {
      shlokaText = data.slok;
      translation = data.translation || fallbackShloka.translation;
    }
  } catch (error) {
    console.warn('Failed to fetch shloka:', error);
  }

  return {
    text: shlokaText,
    translation,
    imageUrl: IMAGE_API_URL, // always use as <img src="...">
  };
}
