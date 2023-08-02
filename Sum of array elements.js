function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0]);
    for(let i=0;i<T;i++){
       let N = parseInt(inputVal[i * 2 + 1]);
       // console.log(N)
    let elements = inputVal[i * 2 + 2].split(" ").map(BigInt);
        //  console.log(elements)
    let sum = BigInt("0");
    for (let j = 0; j < N; j++) {
      sum += elements[j];
    }
    console.log(sum.toString());
 
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