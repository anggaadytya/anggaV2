import axios from 'axios'

export async function getHomeServices() {
  const ANIME_API = `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  try {
    const response = await axios.get(ANIME_API)
    if (response?.status !== 200) return { setTimeout: 5000 }
    return response.data
  } catch (error) {
    return error
  }
}

export async function getMangaServices() {
  const MANGA_API = `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`
  try {
    const response = await axios.get(MANGA_API)
    if (response?.status !== 200) return { setTimeout: 5000 }
    return response.data
  } catch (error) {
    return error
  }
}
