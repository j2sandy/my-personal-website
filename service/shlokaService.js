const SHLOKA_API_URL = 'https://shloka.onrender.com/api/v1/bahgavad_gita/random';
const IMAGE_API_URL = 'https://source.unsplash.com/600x400/?india,sanskrit,temple,yoga';

const fallbackShloka = {
  text: "सा विद्या या विमुक्तये ।",
  translation: "That is knowledge which liberates.",
  imageUrl: '/fallbacks/shloka.jpg', // Put an image in public/fallbacks/shloka.jpg
};

export async function fetchDailyShloka() {
  let shlokaText = fallbackShloka.text;
  let translation = fallbackShloka.translation;
  let imageUrl = fallbackShloka.imageUrl;

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

  try {
    // Unsplash returns a redirect to a random image, so we just use the URL directly
    imageUrl = IMAGE_API_URL;
  } catch (error) {
    console.warn('Failed to fetch image:', error);
  }

  return {
    text: shlokaText,
    translation,
    imageUrl,
  };
}
