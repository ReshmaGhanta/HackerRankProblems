function processData(input) {
    let inputVal=input.trim().split(" ").map(Number)
    let result;
 
    for(let i=0;i<99;i++){
        result^=inputVal[i];
    }
    for(let j=1;j<=100;j++){
        result^=j;
    }
    console.log(result)
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
