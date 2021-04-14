function differenceOfSquares(n){
    let sum = 0
    let s = 0,i;

    for (i = 1; i <=n; i++){
        sum +=i*i
        s+=i;
    }
    return s * s - sum;
}