import { useEffect, useState, useRef } from "react";
import { api } from "../../utils/axios";
import { useAudios, usePlay, useSurah } from "../../utils/zustand";
import { FiPlay, FiPause } from "react-icons/fi"; 

export default function Ayahs({ text, number, audioList }) {
  const [english, setEnglish] = useState();
  const [num, setNum] = useState(null);
  const { audios, setAudios } = useAudios();
  const { play, setPlay } = usePlay();
  const [surahName, setSurahName] = useState();
  const { surah, setSurah } = useSurah();
  const ayahRef = useRef();

  useEffect(() => {
    api.get(`/ayah/${number}/en.asad`).then((response) => {
      setSurahName(response.data.data.surah.englishName);
      setEnglish(response.data.data.text);
      setNum(response.data.data.numberInSurah);
    });
  }, [number]);

  useEffect(() => {
    if (play === num - 1 && ayahRef.current && surah === surahName) {
      ayahRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [play, num]);

  return (
    <div
      ref={ayahRef}
      className={`flex flex-col gap-6 w-full p-8 rounded-2xl text-white shadow-lg transform transition-all duration-300 hover:scale-105 ${
        play === num - 1 && surah === surahName
          ? "bg-black"
          : "bg-gradient-to-r from-teal-400 to-green-500"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="w-1/2">
          {num}. {english}
        </h1>
        <h1 className="w-1/2 text-3xl font-bold text-center text-shadow-lg">{text}</h1>
      </div>
      {play === num - 1 && surah === surahName ? ( 
        <FiPause
          onClick={() => {
            setPlay(null);  
            setSurah(null); 
          }}
          className="cursor-pointer text-3xl"
        />
      ) : (
        <FiPlay
          onClick={() => {
            if (num) {
              setAudios(audioList);
              setPlay(num - 1);
              setSurah(surahName);
            } else {
              console.warn("Audio not found for the current ayah");
            }
          }}
          className="cursor-pointer text-3xl"
        />
      )}
    </div>
  );
}
