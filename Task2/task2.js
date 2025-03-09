const court = (name, numberOfJudges, others) => {
  const time = (others.split(" ").filter(el => name > el).length) * 30 / numberOfJudges + 30;
  console.log(time);
  return time;
}

const t0 = performance.now();
let t = court("Zane", 1, "Mark Hank Ana Vivian")
const t1 = performance.now();
console.log(`This routine took ${t1-t0}ms to execute`);
