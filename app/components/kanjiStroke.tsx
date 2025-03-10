import Image from "next/image";
import useStore from "../store/useStore";

const kanjiStroke = () => {
  const strokes = useStore((state) => state.KanjiData?.strokes.images);
  return (
    <div className=" h-full p-3 flex flex-row gap-2 ">
      {strokes?.map((item, index) => (
        <div key={index} className="bg-white h-fit border-2 ">
          <Image
            src={item}
            alt={`Stroke image ${index + 1}`} // Add alt text for accessibility
            width={50} // Or use your preferred size
            height={50} // Adjust this according to your layout
            layout="intrinsic"
          />
        </div>
      ))}
    </div>
  );
};

export default kanjiStroke;
