import AsyncGameSavingLoader from "../async/GameSavingLoaderAsync";

AsyncGameSavingLoader.load()
  .then((savingGame) => {
    console.log(savingGame);
  })
  .catch((error) => {
    console.error(error);
  });
