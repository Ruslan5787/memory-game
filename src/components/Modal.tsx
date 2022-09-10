import {FC, useEffect, useState} from "react";

export const Modal: FC = () => {
  const [isVisible, setVisible] = useState<any>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    isVisible && (
      <div className="modal">
        <div className="modal__wrapper">Вы победили!</div>
      </div>
    )
  );
};
