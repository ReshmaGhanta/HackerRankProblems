function processData(input) {
    let [N,i]=input.trim().split(" ").map(Number);
        if(((N>>i)&1)==1){
            console.log(true)
        }else{
            console.log(false)
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
