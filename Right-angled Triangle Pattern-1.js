function processData(input) {
    let sum=1;
     for(let i=0;i<input;i++){
         for(let j=0;j<=i;j++){
            process.stdout.write(sum+" ")
            sum++   
         }
         process.stdout.write("\n")
         
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