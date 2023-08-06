function fact(N,M){
    let result=BigInt(1);
  for (let i = 1n; i <=N; i++) {
         result= (result*i)%M; 
     }    
     return (result);
 }



function processData(input) {
 let inputVal=input.split("\n");
 let T=parseInt(inputVal[0]);
 let M=BigInt(1e9+7);
 
 for(let i=1;i<=T;i++){
     let N=BigInt(inputVal[i]);
      let res=fact(N,M);
      console.log(res.toString())
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
