"use client";
import KanjiExample from "@/app/components/kanjiExample";
import KanjiImg from "@/app/components/kanjiImg";
import KanjiInfo from "@/app/components/kanjiInfo";
import useStore from "@/app/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const data = useStore((state) => state.KanjiData);
  const router = useRouter();

  useEffect(() => {
    if (data === null) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <>
      <div className="grid p-8 grid-cols-3 w-full gap-4 h-screen">
        <span className="col-span-2 flex flex-col gap-4 h-full">
          <span className="flex flex-row w-full gap-4">
            <KanjiImg />
            <KanjiInfo />
          </span>
        </span>
        <span className="col-span-1">
          <KanjiExample />
        </span>
      </div>
    </>
  );
};

export default Page;
