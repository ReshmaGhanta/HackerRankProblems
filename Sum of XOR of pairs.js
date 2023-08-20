function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0]);
    
    for(let i=0;i<T;i++){
        let result=BigInt(0);
         let N = BigInt(inputVal[i * 2 + 1]);
         let elements = inputVal[i * 2 + 2].trim().split(" ").map(BigInt);
        for(let j=0;j<N; j++){
            for(let k=0;k<N; k++){
            result +=elements[j]^elements[k]
            }
        }
        
        console.log(result.toString())
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
