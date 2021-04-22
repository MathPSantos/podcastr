import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "rc-slider";

import { usePlayer } from "../../contexts/PlayerContext";

import "rc-slider/assets/index.css";
import styled from "./styles.module.scss";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodesList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
  } = usePlayer();

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const episode = episodesList[currentEpisodeIndex];

  return (
    <div className={styled.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styled.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styled.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode && styled.empty}>
        <div className={styled.progress}>
          <span>00:00</span>
          <div className={styled.slider}>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <div className={styled.emptySlider} />
            )}
          </div>
          <span>00:00</span>
        </div>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className={styled.buttons}>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar Anterior" />
          </button>

          <button
            className={styled.playButton}
            type="button"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pausar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>

          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar Próxima" />
          </button>

          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
