for (let i = 1; i <= 5; i++) {
     {
        console.log("*".repeat(i));
    }
    console.log();
}
console.log("Left hand pyramid");
for (let i = 5; i >= 1; i--) {
    {
        console.log("*".repeat(i));
    }
    console.log();
}
console.log("Full pyramid");
for (let i = 1; i <= 5; i++) {
     {
        console.log(" ".repeat(5-i) + "*".repeat(2*i-1));
    }
    console.log();
}
console.log("Right hand pyramid");
for (let i = 5; i >= 1; i--) {
    {
        console.log("*".repeat(i));
    }
    console.log();
}
let arr={1,2,3};
console.log(arr);
