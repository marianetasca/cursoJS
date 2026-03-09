// @ts-nocheck

function maior (num1, num2) {
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
console.log(maior(10,2));

const max2 = (x,y) => x > y ? x : y;

console.log(max2(100,10));