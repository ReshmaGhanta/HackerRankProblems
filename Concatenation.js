function processData(input) {
    let inputVal=input.split("\n")
    let N=parseInt(inputVal[0]);
    let A=inputVal[1].trim().split(' ').map(Number);;
    let B=[...A,...A];
   
    console.log(B.join(' '))
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
