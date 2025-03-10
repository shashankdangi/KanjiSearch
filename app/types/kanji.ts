export interface Examples {
  japanese: string;
  meaning: {
    english: string;
  };
  audio: {
    opus: string;
  };
}

export interface KanjiApiResponse {
  kanji: {
    character: string;
    meaning: {
      english: string;
    };
    onyomi: {
      katakana: string[];
    };
    kunyomi: {
      hiragana: string[];
    };
    video: {
      poster: string;
      webm: string;
    };
    strokes: {
      images: string[];
    };
  };
  examples: Examples[];
}

export interface KanjiObject {
  character: string;
  meaning: {
    english: string;
  };
  onyomi: {
    katakana: string[];
  };
  kunyomi: {
    hiragana: string[];
  };
  video: {
    poster: string;
    webm: string;
  };
  strokes: {
    images: string[];
  };
}
