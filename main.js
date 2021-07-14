function convert(number) {
  number = parseInt(number);
  let base_2 = [];
  let arr = [1];

  for(let i = 1; i <= 30; i++) {
    arr.push(arr[arr.length - 1] * 2);
  }

  arr.reverse();

  if(number == 0) return '0';

  const index = arr.findIndex(el => {
    return el <= number;
  })

  arr.splice(0, index);

  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    if(sum > number) {
      sum -= arr[i];
      base_2.push(0);
    } else if(sum <= number) {
      base_2.push(1);
    } 
  }

  base_2 = base_2.join("");
  return base_2;
}

module.exports = convert;