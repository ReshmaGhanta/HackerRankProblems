function processData(input) {
    let [a,b,c]=input.trim().split(" ").map(Number);
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("No") 
    }else{
       console.log("Yes")
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