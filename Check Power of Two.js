function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0]);
    for(let i=0;i<T;i++){
       let N=BigInt(inputVal[i+1]);       
        if((N&(N-1n))===0n){
            console.log("True")
        }else{
          console.log("False")
        }  
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