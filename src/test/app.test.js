import newGameSavingLoader from "../Promises/app";

test("test promises", async () => {
  const result = newGameSavingLoader();
  const loader = await result.load();

  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  expect(loader).toEqual(expected);
});
