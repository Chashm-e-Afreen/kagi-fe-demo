function countSmallerSorted(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const court = (name, numberOfJudges, others) => {
  const time = ((others.split(" ").filter(el => name > el).length) * 30) / numberOfJudges + 30;
  return time;
}

const court2 = (name, numberOfJudges, others) => {
  let count = 0;
  const othersArray = others.split(" ");
  for (let o of othersArray) {
    if (name > o) {
      count+= 30
    }
  }
  return count / numberOfJudges + 30;
};

const court3 = (name, numberOfJudges, others) => {
  let count = 0;
  let othersArray = others.split(" ")
  for (let i = 0; i < othersArray.length; i++) {
    if (name > othersArray[i]) {
      count+= 30
    }
  }
  return count / numberOfJudges + 30;
};

const court4 = (name, numberOfJudges, others) => {
  const othersArray = others.split(" ").sort()
  const smallerElements = countSmallerSorted(othersArray, name)

  return (smallerElements * 30) / numberOfJudges + 30;
};

const benchmark = (func, name, numberOfJudges, others, iterations) => {
    const t0 = performance.now()

    for (let i = 0; i < iterations; i++) {
        func(name, numberOfJudges, others)
    }
    const t = func(name, numberOfJudges, others)
    console.log(t)
    const t1 = performance.now()

    return `${t1 - t0}ms`
}

const b1 = benchmark(court, "Jules", 3, "Adam Betty Frank Mike", 100000);
console.log(b1)
const b2 = benchmark(court2, "Jules", 3, "Adam Betty Frank Mike", 100000);
console.log(b2)
const b3 = benchmark(court3, "Jules", 3, "Adam Betty Frank Mike", 100000);
console.log(b3)
const b4 = benchmark(court4, "Jules", 3, "Adam Betty Frank Mike", 100000);
console.log(b4)
