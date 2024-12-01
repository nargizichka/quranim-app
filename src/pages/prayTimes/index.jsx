import { FaSun, FaMoon, FaCloudSun, FaCloud } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { api2 } from '../../utils/axios';

export default function PrayTimes() {
    const currentDate = (() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
      })();
      console.log(currentDate);
    const getTimes = () => api2.get(`/${currentDate}?address=tashkent,UAE&method=8`).then(res => res.data.data.timings);
    const { data, isLoading, isError, error } = useQuery(['times'], getTimes);
    

    if (isLoading) {
        return <div>Loading...</div>;  
    }

    if (isError) {
        return <div>Error: {error.message}</div>;  
    }

    console.log(data);

    return (
        <div className="flex flex-col items-center my-16 px-6">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Namoz vaqtlari ({currentDate})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 w-full max-w-5xl">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl border-gray-200 shadow-lg">
                    <FaSun className="text-4xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-medium text-gray-800">Bomdod</h2>
                    <span className="text-lg text-gray-500">{data.Fajr}</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-200 shadow-lg">
                    <FaCloudSun className="text-4xl text-orange-500 mb-4" />
                    <h2 className="text-xl font-medium text-gray-800">Peshin</h2>
                    <span className="text-lg text-gray-500">{data.Dhuhr || "12:30 PM"}</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-200 shadow-lg">
                    <FaCloud className="text-4xl text-gray-600 mb-4" />
                    <h2 className="text-xl font-medium text-gray-800">Asr</h2>
                    <span className="text-lg text-gray-500">{data.Asr || "03:45 PM"}</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-200 shadow-lg">
                    <FaMoon className="text-4xl text-purple-600 mb-4" />
                    <h2 className="text-xl font-medium text-gray-800">Shom</h2>
                    <span className="text-lg text-gray-500">{data.Maghrib || "05:55 PM"}</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-200 shadow-lg">
                    <FaMoon className="text-4xl text-blue-600 mb-4" />
                    <h2 className="text-xl font-medium text-gray-800">Xufton</h2>
                    <span className="text-lg text-gray-500">{data.Isha || "07:15 PM"}</span>
                </div>
            </div>
        </div>
    );
}
