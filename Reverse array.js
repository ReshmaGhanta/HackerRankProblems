function processData(input) {
    let inputVal=input.split("\n");
    let arrSize=parseInt(inputVal[0]);
    let arr= inputVal[1].trim().split(' ').map(Number);
    let newArr=[];
    let element;
    for(let i=0;i<arrSize;i++){
        element=arr.pop();
         newArr.push(element);    
    }
    console.log(newArr.join(' '));
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
