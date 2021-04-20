import styled from './styles.module.scss'

export function Player() {
  return (
    <div className={styled.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <div className={styled.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div className={styled.progress}>
          <span>00:00</span>
          <div className={styled.slider}>
            <div className={styled.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styled.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="Tocar Anterior"/>
          </button>

          <button className={styled.playButton} type="button">
            <img src="/play.svg" alt="Tocar"/>
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="Tocar Próxima"/>
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}