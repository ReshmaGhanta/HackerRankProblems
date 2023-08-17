function processData(input) {
    let [L,B]=input.trim().split(" ").map(Number);
    console.log(L*B)
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
