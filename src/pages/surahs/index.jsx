import { useQuery } from "react-query";
import { getSurahs } from "../../utils/api/surah";
import { Link } from "react-router-dom";
import Surah from "../../components/surah";

export default function Surahs() {
    const { data } = useQuery(['surahs'], getSurahs);

    return (
        <div className="flex flex-col items-center py-10 my-16 ">
            <h1 className="font-extrabold text-4xl mb-12">Suralar</h1>
            <div className="flex flex-wrap items-center justify-center gap-8 container mx-auto">
                {data?.data?.map((d) => (
                    <Link key={d.number} to={`/surah/${d.number}`}>
                        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <Surah
                                arabicName={d.name}
                                englishName={d.englishName}
                                order={d.number}
                                ayahs={d.numberOfAyahs}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
