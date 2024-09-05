let i = 0;

while (i <= 4) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 4);

for (let i = 0; i < 10; i++) {
    console.log("before continue")
  // if true, skip the remaining part of the body
  if (i == 5) continue;
  console.log(i); // 1, then 3, 5, 7, 9
  console.log("after continue")
  console.log('')
}
