function processData(input) {
    let inputVal=input.trim().split("\n");
    let T=parseInt(inputVal[0])
   
    for(let l=1;l<=T;l++){
        let n=parseInt(inputVal[l]);
        let string = "";
           process.stdout.write('Case #'+l+':'+'\n')
        for (let i = 1; i <= n; i++) {
         
            for (let j = 0; j < n - i; j++) {
                string += " ";
            }
            for (let k = 0; k < i; k++) {
                 string += "*";
            }
                string += "\n";
            } 
         process.stdout.write(string);
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
