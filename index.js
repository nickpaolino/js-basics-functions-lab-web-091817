function distanceFromHqInBlocks(block){
  return Math.abs(42 - block);
}

function calculateVertical(blocks){
  return blocks * 264;
}

function distanceFromHqInFeet(block){
  return calculateVertical(distanceFromHqInBlocks(block));
}

function distanceTravelledInFeet(blockOne, blockTwo){
  return Math.abs(blockOne - blockTwo) * 264;
}

function calculatesFarePrice(start, destination){
  const distance = calculateVertical(Math.abs(destination - start));

  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return distance * 0.02;
  }
  else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
