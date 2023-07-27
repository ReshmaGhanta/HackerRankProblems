function processData(input) {
    let inputVal=input.split("\n")
    let arrSize= parseInt(inputVal[0]);
      let arr = inputVal[1].trim().split(' ').map(Number); 
    let maxVal= arr[0];
      //console.log(maxVal)
    //console.log(arr)
     for(let i=1;i<arrSize;i++){
         //console.log(arr[i])
         if(arr[i]>maxVal){
             maxVal=arr[i];
         }
     }
   console.log(maxVal);
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
