function processData(input) {
    let inputVal = input.split("\n");
    let T = parseInt(inputVal[0]);
    
    for (let i = 1; i <= T; i++) {
      let N = BigInt(inputVal[i]);
      let trailingZeros = countTrailingZeros(N);
      console.log(trailingZeros.toString());
    }
  }
  
  function countTrailingZeros(num) {
    let count = 0n;
    while (num > 0n) {
      num /= 5n; // Divide by 5 to count the number of factors of 5
      count += num; // Add the count of factors of 5
    }
    return count;
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
  