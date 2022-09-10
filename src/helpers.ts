import {IPictureItem} from "./types/pictures";

export function getRandomElement(array: any[]) {
  return array.splice(Math.floor(Math.random() * array.length), 1);
}

export const cardShuffling = (list: IPictureItem[]) => {
  const picturesInRandomOrderCopy: IPictureItem[] = [];

  while (list.length) {
    const randomPicture: IPictureItem[] = getRandomElement(list);

    picturesInRandomOrderCopy.push(...randomPicture);
  }

  return picturesInRandomOrderCopy;
};
