import ReactPlayer from "react-player";
import { useAudios, usePlay, useSurah } from "../../utils/zustand";
import { useEffect } from "react";
import { FiX } from "react-icons/fi"; 

export default function Audio() {
  const { audios } = useAudios();
  const { play, setPlay } = usePlay();
  const { surah, setSurah } = useSurah();

  useEffect(() => {
    if (play >= audios.length || play < 0) {
      setPlay(0);
    }
  }, [play, audios, setPlay]);

  const handleAudioEnd = () => {
    if (play < audios.length - 1) {
      setPlay(play + 1);
    } else {
      console.log("All audios finished");
      setPlay(0);
    }
  };

  const handleClose = () => {
    setPlay(null); 
    setSurah(null); 
  };

  if (!audios || audios.length === 0) {
    return <div className="text-center text-gray-600 mt-4">No audios available</div>;
  }

  

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 px-4">
      <div className="relative w-full h-[120px] rounded-3xl bg-green-900 shadow-lg">
        <div className="absolute inset-0 flex flex-col items-center justify-start text-white font-bold px-4 text-center m-4">
          <p className="text-2xl">{surah}: {play + 1}</p>
        </div>

        <FiX
          onClick={handleClose} // X tugmasi bosilganda audio to'xtaydi
          className="cursor-pointer text-3xl text-white absolute top-2 right-2"
        />
        <div className="absolute bottom-0 left-0 w-full h-12 rounded-3xl">
          <ReactPlayer
            url={audios[play]}
            width="100%"
            height="100%"
            onEnded={handleAudioEnd}
            controls
            playing
            className="h-full rounded-b-3xl"
            onError={(e) => console.error("Audio Error:", e)}
            style={{
              height: "100%",
              borderRadius: "0 0 24px 24px",
              border: "none", 
              overflow: "hidden", 
            }}
          />
        </div>
      </div>
    </div>
  );
}