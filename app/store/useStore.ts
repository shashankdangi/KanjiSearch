import { create } from "zustand";
import { Examples, KanjiObject } from "../types/kanji";

type Store = {
  Kanji: string;
  KanjiData: KanjiObject | null;
  loading: boolean;
  setKanji: (word: string) => void;
  setKanjiData: (data: KanjiObject) => void;
  setLoading: (loading: boolean) => void;
  Examples: Examples[] | null;
  setExamples: (data: Examples[]) => void;
};

const useStore = create<Store>()((set) => ({
  Kanji: "",
  KanjiData: null,
  loading: false,
  Examples: null,
  setKanji: (word: string) => {
    set({ Kanji: word });
  },
  setKanjiData: (data: KanjiObject) => {
    console.log(data);
    set({ KanjiData: data });
  },
  setLoading: (loading: boolean) => set({ loading }),
  setExamples: (exp: Examples[]) => {
    console.log(exp);
    set({ Examples: exp });
  },
}));

export default useStore;
