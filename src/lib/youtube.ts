const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function searchYouTube(query: string) {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
      query
    )}&key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch from youtube api:  `);
  }

  const data = await res.json();
  return data.items;
}
