import { Play } from "lucide-react";
import useStore from "../store/useStore";

const KanjiExample = () => {
  const exampleReading = useStore((state) => state.Examples);

  const playAudio = (audio: string) => {
    const sound = new Audio(audio);
    sound.play();
  };
  return (
    <div className=" h-screen">
      <h1 className="after: border-b-2 mb-4 p-2 font-bold text-2xl">
        Example Readings
      </h1>
      {exampleReading?.map((item, index) => (
        <div key={index} className="flex justify-between mb-5">
          <span>
            <p>{item.japanese}</p>

            <p>{item.meaning.english}</p>
          </span>
          <Play
            className="hover:cursor-pointer"
            onClick={() => {
              playAudio(item.audio.opus);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default KanjiExample;
