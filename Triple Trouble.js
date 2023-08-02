function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0]);
    
    for(let i=0;i<T;i++){
        let N = parseInt(inputVal[i * 2 + 1]);
        let elements = inputVal[i * 2 + 2].split(" ").map(Number);
        let result=0;
        for(let j=0;j<31;j++){
            let count=0;
            for(let k=0;k<N;k++){
                if( ((elements[k]>>j)&1) ==1 ){
                    count++;
                }
            }
            if(count%3==1){
                result=result+(1<<j);
            }
        }
        console.log(result);
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
