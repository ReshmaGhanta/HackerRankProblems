function processData(input) {
    let inputVal=input.trim().split("\n");
    let T=BigInt(inputVal[0]);
     for(let i=1n;i<=T;i++){
         let N=BigInt(inputVal[i]);
         let count=0;
         for(let j=0n;j<64n;j++){
             if(((N>>j)&1n)==1n){  
                 count++;
             }
         }
         console.log(count.toString())
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
