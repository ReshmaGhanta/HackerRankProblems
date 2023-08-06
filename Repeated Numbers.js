function processData(input) {
    let inputVal=input.split("\n");
    let T=parseInt(inputVal[0])
    for(let i=0;i<T;i++)
    {
        let N=parseInt(inputVal[i*2+1]);
        let arr=inputVal[i * 2 + 2].trim().split(" ").map(Number);

        let x=0;
        let bitPos=0;
        let k=1;
    
        for(let j=0;j<N;j++){
            x=x^arr[j];
        }
        for(let k=1;k<=N-2;k++){
            x=x^k;
        }

            
         for(let l=0;l<32;l++){
             if(((x>>l)&1)==1){
               bitPos=l;
                break;  
              }
        }
   
        let p=0,q=0;
       for(let i=0;i<N;i++){
          if((arr[i]>>bitPos)&1==1){
                p=p^arr[i];
              }else{
               q= q^arr[i];
              }
        }
           
        for(let j=1;j<=N-2;j++){
                if((j>>bitPos)&1==1){
                  p=p^j;
                }else{
                 q= q^j;
               }   
           }
      
        if(p>q){
            console.log(q,p)
        }else{
        console.log(p,q)
        }

       
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