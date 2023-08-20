function processData(input) {
    let inputVal=input.trim().split("\n");
      let [N,K]=inputVal[0].split(" ").map(BigInt);
      let arr = inputVal[1].split(" ").map(BigInt);
      let flag=false;
      for(let i=0n;i<N;i++){
          if(arr[i]==K){
              flag=true;
              console.log(i.toString())
          }
      }
      if(flag==false){
              console.log(-1)
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