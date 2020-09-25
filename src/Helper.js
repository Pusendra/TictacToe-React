export let status = "";

export const WinningLogic = (gameStates) => {
  const winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const dataX = [];
  const dataO = [];

  gameStates.forEach((item, index) => {
    if (gameStates[index] === "X") {
      dataX.push(index);
    } else if (gameStates[index] === "O") {
      dataO.push(index);
    }
  });

  winMatrix.forEach((item) => {
    const resultX = item.every((el) => dataX.includes(el));
    const resultO = item.every((el) => dataO.includes(el));
    if (resultX) {
      status = "winner is X";
    } else if (resultO) {
      status = "Winner is O";
    }
  });
};
export const handleRes = () => {
  status = "";
};
