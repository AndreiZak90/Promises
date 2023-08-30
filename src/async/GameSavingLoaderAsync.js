import json from "../Promises/parser";
import read from "../Promises/reader";

export default class AsyncGameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedValue = await json(data);
      return JSON.parse(parsedValue);
    } catch (error) {
      throw new Error("Error Value");
    }
  }
}
