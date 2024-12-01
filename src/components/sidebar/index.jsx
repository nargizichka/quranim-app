import { useQuery } from "react-query";
import { getSurahs } from "../../utils/api/surah";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const { data } = useQuery(['surah'], getSurahs);

    return (
        <div className="my-16 lg:my-0 lg:block hidden fixed top-0 left-0 flex flex-col w-96 bg-gray-100 h-screen p-4 shadow-lg overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                Suralar
            </h2>
            {data?.data?.map((d) => (
                <Link to={`/surah/${d.number}`} key={d.number} >
                    <div
                        className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                    >
                        <h1 className="text-lg font-medium text-gray-700">
                            {d.englishName}
                        </h1>
                        <span className="text-sm text-gray-500">{d.number}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
