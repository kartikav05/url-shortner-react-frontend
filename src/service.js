import axios from 'axios';

const API_URL = "http://localhost:3000";

export const getTopUrls = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data.urls;
};

export const shortenUrl = async (full_url) => {
  try {
    const response = await axios.post(`${API_URL}/short_urls`, { full_url });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};