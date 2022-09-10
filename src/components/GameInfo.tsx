import {FC} from "react";

import PICTURES from "../images";

interface GameInfoProps {
  attempts: number;
  numberOfGuesses: number;
}

export const GameInfo: FC<GameInfoProps> = (props) => {
  const {attempts, numberOfGuesses} = props;

  return (
    <div className="game-info">
      <span className="number-attempts">
        Количество попыток <b>{attempts}</b>
      </span>
      <span className="guessed-cards">
        Угадано <b>{numberOfGuesses}</b> из <b>{PICTURES.length}</b>
      </span>
    </div>
  );
};
