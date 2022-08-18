function zTraversal(N,arr){
    //write code here
    var bag =[];
    for(var i=0;i<N;i++){
        bag.push(arr[0][i]+" ");
    }
    i=1;
    j=N-2;
  while(i < N && j >= 0){
      bag.push(arr[i][j]+" ");
      i++;
      j--;
  }
  for(i=1;i<N;i++){
      bag.push(arr[N-1][i]+" ");
  }
  console.log(bag.join(""));
}