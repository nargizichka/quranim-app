import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/axios";
import Ayahs from "../../components/ayah";
import Sidebar from "../../components/sidebar";
import { usePlay } from "../../utils/zustand";

export default function Single() {
    const [ayah, setAyah] = useState([]);
    const [surah, setSurah] = useState();
    const { play, setPlay } = usePlay();
    const { id } = useParams();
    const [audioList, setAudioList] = useState();

    useEffect(() => {
        api.get(`/surah/${id}/ar.alafasy`)
            .then((response) => {
                setSurah(response.data.data.englishName);
                const ayahs = response.data.data.ayahs;
                setAyah(ayahs);
                const audioList1 = ayahs.map((a) => a.audio);
                setAudioList(audioList1);
            });
    }, [play, id]);

    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 my-16">
            <Sidebar />
            <div className="flex flex-col items-center gap-6 sm:ml-20 lg:ml-96 flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center">{surah}</h1>
                <div className="flex flex-col gap-5 container mx-auto w-full sm:w-3/4 md:w-full lg:w-5/6">
                    {ayah.map((a) => (
                        <Ayahs
                            key={a.number}
                            text={a.text}
                            number={a.number}
                            audio={a.audio}
                            audioList={audioList}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
