let x=0;
let y=1;
let i=1;
let z=5

for(j=1;j<=x;j++){
    let str=""
for(k=1;k<=j;k++){
    while(i<=((j*(j+1)/2))){
        str=str+`${x} `
        c=x+y
        x=y
        y=c
        i++
    } 
}
console.log(str)
}