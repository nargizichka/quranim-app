export default function Surah({ arabicName, englishName, order, ayahs }) {
    return (
        <div className="flex flex-col gap-6 w-full sm:w-[320px] md:w-[340px] lg:w-[350px] bg-green-600 p-6 rounded-3xl items-center shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 border-4 border-gold hover:border-yellow-400">
            <div className="relative flex justify-center items-center w-[80px] h-[80px] bg-teal-100 text-white font-bold text-lg text-center rounded-[10px]">
                <div className="absolute inset-0 w-full h-full bg-teal-100 transform rotate-45 clip-path-octagon"></div>
                <div className="relative z-10 text-green-500 text-3xl">{order}</div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-white text-shadow-2xl mb-4 w-full text-center">
                {arabicName}
            </h1>
            
            <h2 className="text-lg sm:text-xl font-semibold text-white text-shadow-lg mb-4 w-full text-center">
                {englishName}
            </h2>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white text-shadow-lg w-full text-center">
                {ayahs} oyat
            </h3>
        </div>
    );
}
