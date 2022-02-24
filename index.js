// Code your solution in this file!
function distanceFromHqInBlocks(blockTraveledTo) {
  // delcare an HQ variable (42)
  // if hq is greater than blockTraveledTo
    // subtract blockTraveled to from hq
    // return result
  // otherwise 
    // subtract hq from blockTraveledTo
    // return result
  const hQ = 42;
  if (hQ > blockTraveledTo) {
    return hQ - blockTraveledTo;
  } else {
    return blockTraveledTo - hQ;
  }
}

function distanceFromHqInFeet(blockDestination) {
  // declare a varible calling distanceFromHqInBlocks on input parameter
  // take that result and multiply it by 264
  // return result
  const blocksTraveled = distanceFromHqInBlocks(blockDestination);
  return blocksTraveled * 264;
}

function distanceTravelledInFeet(block1, block2) {
  // subtract block1 from block2
  // get the absolute value of the result
  // multiply the result by 264
  const travelledBlocks = block2 - block1;
  return Math.abs(travelledBlocks) * 264;
}

function calculatesFarePrice(start, destination) {
  // call the distanceTravelledInFeet function to get feet travelled
  // if feet travelled is less than 400
    // return 0
  // if feet travelled is greater than or equal to 400 AND less than 2000
    // subtract 400 and multiply the result by .02
    // return
  // if feet travelled is greater than or equal to 2000 and less than 2500
    // return 25
  // otherwise
    // return 'cannot travel that far'
  const feetTravelled = distanceTravelledInFeet(start, destination);
  let totalDue = 0;
  if (feetTravelled < 400) {
    return totalDue;
  } else if (feetTravelled >= 400 && feetTravelled < 2000) {
    totalDue = (feetTravelled - 400) * .02;
    return totalDue;
  } else if (feetTravelled >= 2000 && feetTravelled < 2500) {
    totalDue = 25;
    return totalDue;
  } else {
    return 'cannot travel that far';
  }
}