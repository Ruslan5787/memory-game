import React, {FC, useEffect, useState} from "react";

import "./styles/style.scss";

import {ButtonReset} from "./components/ButtonReset";
import {Cards} from "./components/Cards";
import {GameInfo} from "./components/GameInfo";
import {Modal} from "./components/Modal";
import PICTURES from "./images";

export const App: FC = () => {
  const [attempts, setAttempts] = useState<number>(0);
  const [numberOfGuesses, setNumberOfGuesses] = useState<number>(0);
  const [isGameReset, setGameReset] = useState<boolean>(false);

  useEffect(() => {
    if (isGameReset) {
      setAttempts(0);
      setNumberOfGuesses(0);
    }
  }, [isGameReset]);

  const getModal = () => {
    if (numberOfGuesses === PICTURES.length) {
      return <Modal/>;
    }
  };

  return (
    <div className="content">
      <div className="content-wrapper">
        {getModal()}

        <ButtonReset setGameReset={setGameReset}/>

        <Cards
          attempts={attempts}
          setAttempts={setAttempts}
          setNumberOfGuesses={setNumberOfGuesses}
          isGameReset={isGameReset}
        />

        <GameInfo attempts={attempts} numberOfGuesses={numberOfGuesses}/>
      </div>
    </div>
  );
};
