function processData(input) {
    let [a,b] = input.trim().split(' ').map(Number);
      let x=BigInt(a);
      let result = BigInt(1);
      while(b>0){
          if((b&1)==1){
             result=result*x;
             }
               x=x*x;
          b=b>>1;
      }
      
     console.log(result.toString());
    
    } 