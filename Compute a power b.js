function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0]);
    let currentIndex=1;
     let Mod=BigInt(1e9+7);
    for(let i=0; i< T; i++){
        let [N,M]=inputVal[currentIndex].split(" ").map(Number);
        currentIndex++;
        let powerVal=BigInt("1");
        let x=BigInt(N);
        
        for(let i=0;i<31;i++){
            if(((M>>i)&1)==1){
                powerVal=((powerVal%Mod)*(x%Mod))%Mod;
            }  
            x=((x%Mod)*(x%Mod))%Mod;
        }
        console.log(powerVal.toString())
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
