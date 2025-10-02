/* 
Given an array of numbers representing the speed at which vehicles 
were observed traveling, and a number representing the speed limit,
return an array with two items, the number of vehicles that were 
speeding, followed by the average amount beyond the speed 
limit of those vehicles.

If there were no vehicles speeding, return [0, 0].
*/

function speeding(speeds, limit) {
  let overSpeed = [];
  let accumulated = 0;
  let answer = [];

  // Loop for to filter cars who overpassed the speed limit
  for (let speed of speeds){
    if(speed > limit){
      overSpeed.push(speed);
      // Sum the difference between the speed registered and the limit
      accumulated += speed - limit;
    }
  }
  
  if (overSpeed.length === 0){
    answer = [0, 0];
    return answer;
  }

  // Add the total cars who surprassed the speed limit
  answer.push(overSpeed.length);
  // and the average amount beyond the speed limit of those cars
  answer.push(accumulated / overSpeed.length);

  return answer;
}

console.log(speeding([50, 60, 55], 60));
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
console.log(speeding([100, 105, 95, 102], 100));
console.log(speeding([40, 45, 44, 50, 112, 39], 55));