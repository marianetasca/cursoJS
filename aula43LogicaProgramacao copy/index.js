
// @ts-nocheck

function number(n) { // minha versao
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else if (n % 3 === 0) {
        return 'Fizz'
    } else {
        return n;
    }

}

for (let i = 0; i <= 100; i++) {
    console.log(i, number(i));
}

// if (typeof n !== 'number') return n; // versao do professor
// if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
// if (n % 5 === 0) return 'Buzz';
// if (n % 3 === 0) return 'Fizz';
// return n;
