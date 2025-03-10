"use client";
import useStore from "../store/useStore";
import KanjiStroke from "./kanjiStroke";
import { Badge } from "@/components/ui/badge";

const KanjiInfo = () => {
  const data = useStore((state) => state.KanjiData);

  return (
    <div className=" w-full h-full p-3 flex flex-col gap-3">
      <span id="meaning">
        <h1 className="uppercase font-extrabold text-5xl">
          {data?.meaning.english}
        </h1>
      </span>
      <span id="readings" className="flex flex-col gap-2">
        <p className=":after border-b-2 mb-3 p-2">Readings</p>
        <p>
          <Badge>音</Badge>
          <span> : {data?.onyomi.katakana}</span>{" "}
        </p>
        <p>
          <Badge>くん</Badge>
          <span>：{data?.kunyomi.hiragana}</span>{" "}
        </p>
      </span>

      <span id="radical">
        <p className=":after border-b-2 mb-3 p-2">Stroke Order</p>
        <KanjiStroke />
      </span>
    </div>
  );
};

export default KanjiInfo;
