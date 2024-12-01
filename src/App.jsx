import Surahs from "./pages/surahs";
import { Route, Routes } from "react-router-dom";
import Single from "./pages/single";
import Navbar from "./components/navbar";
import PrayTimes from "./pages/prayTimes";
import Audio from "./components/audio";
import { usePlay } from "./utils/zustand";
import Home from "./pages/home";

export default function App() {
  const {play} = usePlay()  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/surahs" element={<Surahs />} /> 
        <Route path="/times" element={<PrayTimes />} /> 
        <Route path="/surah/:id" element={<Single />} /> 
      </Routes>
      .
      {play>=0 && play!=null ? <Audio /> : ""}
      
    </div>
  );
}
