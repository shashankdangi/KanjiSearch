"use client";
import axios from "axios";
import { KanjiApiResponse } from "../types/kanji";
import { use, useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_HOST;

const useKanjiApi = (kanji: string) => {
  const [data, setData] = useState<KanjiApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchKanjiData = async (kanji: string) => {
    if (!kanji) return;

    setLoading(true);

    try {
      const encodedKanji = encodeURIComponent(kanji);
      const response = await axios.get<KanjiApiResponse>(
        `${API_URL}/${encodedKanji}`,
        {
          headers: {
            "x-rapidapi-key": API_KEY!,
            "x-rapidapi-host": API_HOST!,
          },
        }
      );
      setData(response.data);
      setError(null);
      return response.data;
    } catch (err: any) {
      setError(err.message);
      setData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchKanjiData };
};

export default useKanjiApi;
