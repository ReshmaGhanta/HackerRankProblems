function processData(input) {
    let inputVal=input.split("\n");
    let arrSize=parseInt(inputVal[0]);
    let arr= inputVal[1].trim().split(' ').map(Number);
   const uniqueArray = [];
    let tempArray=[];
    
   for (let i = 0; i <arrSize; i++) {
     if (!uniqueArray.includes(arr[i])){
          uniqueArray.push(arr[i]);
       }else{
           tempArray.push(arr[i])
       }
       
   }
    console.log((uniqueArray.filter((element) => !tempArray.includes(element)).join(' ')));

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