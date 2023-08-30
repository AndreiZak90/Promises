import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  load() {
    return read()
      .then((data) => json(data))
      .then((newValue) => JSON.parse(newValue))
      .catch((Error) => {
        throw new Error("Error Value");
      });
  }
}
