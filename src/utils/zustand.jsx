import { create } from "zustand"; 
import { persist } from 'zustand/middleware'

export const usePlay = create(
  persist(
    (set, get) => ({
        play: {},
        setPlay: (newPlay) => set((state) => ({ play: newPlay })),
    }),
    {
      name: 'play', 
    },
  ),
)

// export const usePause = create(
//   persist(
//     (set, get) => ({
//         pause: {},
//         setPause: (newPause) => set((state) => ({ pause: newPause })),
//     }),
//     {
//       name: 'pause', 
//     },
//   ),
// )


export const useAudios = create(
  persist(
    (set, get) => ({
        audios: [],
        setAudios: (newAudios) => set((state) => ({ audios: newAudios})),
    }),
    {
      name: 'audios', 
    },
  ),
)


export const useSurah = create(
  persist(
    (set, get) => ({
        surah: [],
        setSurah: (newSurah) => set((state) => ({ surah: newSurah})),
    }),
    {
      name: 'surah', 
    },
  ),
)