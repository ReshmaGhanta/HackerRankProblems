function processData(input) {
    let inputVal=input.split("\n");
     let arrSize=parseInt(inputVal[0]);
     let arr= inputVal[1].trim().split(' ').map(Number)
      let sum=0;
     
     for(let i=0;i<arrSize;i++){
        if (arr[i] % 2 !== 0) {
          sum += arr[i];
        }
   }
     
     console.log(sum)
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