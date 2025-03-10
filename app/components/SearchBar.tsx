"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import useStore from "../store/useStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { KanjiApiResponse } from "../types/kanji";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_HOST;

interface Variance {
  variable?: string;
}

const SearchBar = ({ variable = "default" }: Variance) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const { setKanji, setKanjiData, setLoading, setExamples } = useStore(
    (state) => state
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    setLoading(true);
    setKanji(inputValue);

    try {
      const encodedKanji = encodeURIComponent(inputValue);
      const response = await axios.get<KanjiApiResponse>(
        `${API_URL}/${encodedKanji}`,
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        }
      );

      console.log("Api response", response.data.kanji);
      console.log("Examples", response.data.examples);

      if (response.data && response.data.kanji) {
        // Access only the kanji data from the API response
        setKanjiData(response.data.kanji);
        setExamples(response.data.examples);
        console.log("Kanji data", response.data.kanji);

        router.push(`/kanji/${inputValue}`);
      }
    } catch (error) {
      console.error("Error fetching Kanji data:", error);
      // You might want to show a user-friendly message in case of an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Input
        className={`${variable === "default" ? "w-100" : ""}`}
        value={inputValue} // Make sure value is controlled
        onChange={handleChange}
        placeholder="Search Kanji"
      />
      <Search className="size-8 hover:cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default SearchBar;
