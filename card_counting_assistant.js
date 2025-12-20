let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  }
  else if (card >= 7 && card <= 9) {
    count = count;
  }
  else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }
  else {
    return 'Input not valid.';
  }

  return (count <= 0) ? `${count} Hold` : `${count} Bet`;
}

console.log(cardCounter(3));
console.log(cardCounter(2));
console.log(cardCounter('A'));
console.log(cardCounter(10));
console.log(cardCounter('K'));