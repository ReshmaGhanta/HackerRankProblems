function processData(input) {
    let inputVal=input.split("\n");
    let [N,M]=inputVal[0].split(" ").map(Number);
   
    //console.log(N)
    for (let i = 1; i <= N; i++) {
    const row = inputVal[i].split(' ').map(Number);
     const sum = row.reduce((acc, num) => acc + num, 0);
    console.log(sum);
    }
  

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
