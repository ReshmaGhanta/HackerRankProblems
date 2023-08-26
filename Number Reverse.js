function processData(input) {
    let N=BigInt(input)
    let result=N.toString().split("").reverse().join('')
    console.log(parseInt(result))
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
