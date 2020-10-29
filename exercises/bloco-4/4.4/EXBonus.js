function Romanos(roma) {
    let romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
  
    let numbers = [];
    let result = 0;
  
    for (let key in roma) {
        numbers[key] = romanos[roma[key]];
    }
  
    for (let key in numbers) {
        if (numbers[key] < numbers[key + 1]) {
        result -= numbers[key];
        } else {
        result += numbers[key];
        }
    }
  
    return result;
}
  
console.log(Romanos("IX"));