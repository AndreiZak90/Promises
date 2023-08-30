import GameSavingLoader from "./GameSavingLoader";

export default function newGameSavingLoader() {
  const loader = new GameSavingLoader();
  loader
    .load()
    .then((gameLoader) => {
      console.log(gameLoader);
    })
    .catch((error) => {
      console.error(error);
    });
  return loader;
}

newGameSavingLoader();
