"use strict";

const calcTempAmplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
};

calcTempAmplitude([3, 4, -5], [0, 3, 4]);
