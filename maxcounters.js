function solution(N, A) {
    myarray = new Array(N);
    myarray.fill(0);
    for(i=0;i<A.length;i++){
        if(A[i]<=N){
            myarray[A[i]-1]++;
        }else if(A[i]>N){
            myarray.fill(Math.max(...myarray));
        }
    }
    return myarray;
}

solution(5, [3, 4, 4, 6, 1, 4, 4]);