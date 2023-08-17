function processData(input) {
    const [a,b] = input.trim().split(' ').map(Number);
        
      let result = 1;
      for (let i = 0; i < b; i++) {
        result *= a;
      }
      
     console.log(result);
    
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
    