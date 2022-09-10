import {FC} from "react";

interface ButtonResetProps {
  setGameReset: (flag: boolean) => void;
}

export const ButtonReset: FC<ButtonResetProps> = (props) => {
  const {setGameReset} = props;

  const handleClick = () => {
    setGameReset(true);

    setTimeout(() => {
      setGameReset(false);
    }, 1000);
  };

  return (
    <button className="button-reset" onClick={handleClick}>
      Начать заново
    </button>
  );
};
