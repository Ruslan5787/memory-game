import {FC, useEffect, useState} from "react";

import PICTURES from "../images";
import {cardShuffling} from "../helpers";
import {IPictureItem} from "../types/pictures";

import {Card} from "./Card";
import classNames from "classnames";

const listRepeatingPictures: any[] = [...PICTURES, ...PICTURES];

interface CardsProps {
  attempts: number;
  setAttempts: (number: number) => void;
  setNumberOfGuesses: (number: number) => void;
  isGameReset: boolean;
}

export const Cards: FC<CardsProps> = (props) => {
  const {attempts, setAttempts, setNumberOfGuesses, isGameReset} = props;

  const [cardsInRandomOrder, setCardsInRandomOrder] = useState<IPictureItem[]>(
    []
  );
  const [indicesTwoClickCards, setIndicesTwoClickCards] = useState<number[]>(
    []
  );
  const [idMatchedCards, setIdMatchedCards] = useState<number[]>([]);
  const [isClickBlock, setClickBlock] = useState<boolean>(false);

  useEffect(() => {
    setCardsInRandomOrder(cardShuffling(listRepeatingPictures));
  }, []);

  useEffect(() => {
    setNumberOfGuesses(idMatchedCards.length);

    if (indicesTwoClickCards.length < 2) return;

    const firstMatches = cardsInRandomOrder[indicesTwoClickCards[0]];
    const secondMatches = cardsInRandomOrder[indicesTwoClickCards[1]];

    if (indicesTwoClickCards.length === 2) {
      setClickBlock(true);
      setAttempts(attempts + 1);

      setTimeout(() => {
        setIndicesTwoClickCards([]);
        setClickBlock(false);
      }, 800);
    }

    if (secondMatches && firstMatches.id === secondMatches.id) {
      setIdMatchedCards([...idMatchedCards, secondMatches.id]);
    }
  }, [indicesTwoClickCards]);

  useEffect(() => {
    if (isGameReset) {
      listRepeatingPictures.push(...PICTURES, ...PICTURES);
      setIndicesTwoClickCards([]);
      setIdMatchedCards([]);

      setTimeout(() => {
        setCardsInRandomOrder(cardShuffling(listRepeatingPictures));
      }, 200);
    }
  }, [isGameReset]);

  return (
    <div
      className={classNames("cards", {
        "click-block": isClickBlock,
      })}
    >
      {cardsInRandomOrder.map((card, index) => (
        <Card
          key={index}
          indexCard={index}
          infoCard={card}
          indicesTwoClickCards={indicesTwoClickCards}
          setIndicesTwoClickCards={setIndicesTwoClickCards}
          idMatchedCards={idMatchedCards}
        />
      ))}
    </div>
  );
};
