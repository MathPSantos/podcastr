import { createContext, ReactNode, useContext, useState } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodesList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
};

interface PlayerProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [episodesList, setEpisodesList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodesList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider
      value={{
        episodesList,
        currentEpisodeIndex,
        isPlaying,
        play,
        togglePlay,
        setPlayingState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
