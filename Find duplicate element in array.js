function processData(input) {
    let inputVal=input.split("\n");
    let arrSize=parseInt(inputVal[0]);
    let arr=inputVal[1].trim().split(' ').map(Number);
    let duplicate=0;
    
    duplicate=arr.filter((element, index) => arr.indexOf(element) !== index);
    
    console.log(duplicate.join(' '))
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
