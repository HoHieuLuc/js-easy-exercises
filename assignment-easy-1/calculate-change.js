// quarter: 25
// dime: 10
// nickel: 5
// penny: 1

const _two = (cents) => {
    const quarters = Math.floor(cents / 25);
    let remainder = cents % 25;

    const dimes = Math.floor(remainder / 10);
    remainder %= 10;
    
    const nickels = Math.floor(remainder / 5);
    remainder %= 5;

    const pennies = remainder;
    console.log(`${cents} cents in minimal change is: ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.`);
};

_two(94);