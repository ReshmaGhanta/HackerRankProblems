function processData(input) {
    let inputVal=input.trim().split("\n");
    let T=parseInt(inputVal[0]);
      // console.log(T)
   //console.log(inputVal);
   let currentIndex = 1;
     for(let i=0;i<T;i++){
         let [N1,M1]=inputVal[currentIndex].trim().split(" ").map(Number);
        // console.log(N1,M1)
         currentIndex++;

       let matrix1 = [];
       for (let j = 0; j <N1; j++) {
           matrix1.push(inputVal[currentIndex].trim().split(" ").map(Number));
           currentIndex++;
       }
        // console.log(matrix1)
       let [N2, M2] = inputVal[currentIndex].trim().split(" ").map(Number);
       currentIndex++;
          //console.log(N2,M2)
       let matrix2 = [];
       for (let j = 0; j <N2; j++) {
           matrix2.push(inputVal[currentIndex].trim().split(" ").map(Number));
           currentIndex++;
       }
        // console.log(matrix2)
        if (M1 !== N2) {
           console.log("Matrices cannot be multiplied. Invalid input.");
           continue;
       }
         
             function multiplyMatrices(matrix1, matrix2) {
         let result = [];
       for (let i = 0; i < matrix1.length; i++) {
           let row = [];
           for (let j = 0; j < matrix2[0].length; j++) {
               let sum = 0;
               for (let k = 0; k < matrix2.length; k++) {
                   sum += matrix1[i][k] * matrix2[k][j];
               }
               row.push(sum);
           }
           result.push(row);
       }
         return result;
     }
         let resultMatrix = multiplyMatrices(matrix1, matrix2);
         
          for (let row of resultMatrix) {
             console.log(row.join(" "));
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
