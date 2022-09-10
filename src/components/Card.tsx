import {FC, useEffect, useState} from "react";
import classNames from "classnames";
import {IPictureItem} from "../types/pictures";

interface CardProps {
  indexCard: number;
  infoCard: IPictureItem;
  indicesTwoClickCards: number[];
  setIndicesTwoClickCards: (list: number[]) => void;
  idMatchedCards: number[];
}

export const Card: FC<CardProps> = (props) => {
  const {
    indexCard,
    infoCard,
    indicesTwoClickCards,
    setIndicesTwoClickCards,
    idMatchedCards,
  } = props;

  const [isFlipped, setFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIndicesTwoClickCards([...indicesTwoClickCards, indexCard]);
  };

  useEffect(() => {
    if (indicesTwoClickCards.includes(indexCard)) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }

    if (idMatchedCards.includes(infoCard.id)) {
      setFlipped(true);
    }
  }, [indicesTwoClickCards]);

  return (
    <div className="scene scene--card">
      <div
        className={classNames("card", {
          "is-flipped": isFlipped,
        })}
        onClick={handleClick}
      >
        <div className="card__face card__face--front"></div>
        <div className="card__face card__face--back">
          <img className="card__picture" src={infoCard.pictureSrc} alt=""/>
        </div>
      </div>
    </div>
  );
};
