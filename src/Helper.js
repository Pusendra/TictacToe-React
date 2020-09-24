export let status = "";
export function WinningLogic(gameStates) {
  const winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const dataX = [];
  const dataO = [];

  gameStates.filter((item, index) => {
    if (gameStates[index] === "X") {
      dataX.push(index);
      return true;
    } else if (gameStates[index] === "O") {
      dataO.push(index);
    }
  });
  console.log("val", dataX, dataO);

  winMatrix.forEach((item) => {
    const resultX = item.every((el) => dataX.includes(el));
    const resultO = item.every((el) => dataO.includes(el));
    if (resultX) {
      status = "winner is X";
    } else if (resultO) {
      status = "Winner is O";
    }
  });
}
export function handleRes() {
  status = "";
}
