// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let [wedgesCounter, limeCounter] = [0,0];

  while (wedgesCounter < wedgesNeeded && limeCounter <= limes.length) {

    if (!limes[limeCounter]) break;

    switch (limes[limeCounter]) {
      case 'small':
        wedgesCounter += 6;
        limeCounter++;
        continue;

      case 'medium':
        wedgesCounter += 8;
        limeCounter++;
        continue;

      case 'large':
        wedgesCounter += 10;
        limeCounter++;
        continue;
      default:
        break;
    }
  } 

  return limeCounter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let [accumulatedTime, ordersCounter] = [0,0];
  do {
    accumulatedTime += timeToMixJuice(orders[ordersCounter])
    ordersCounter++;
  } while (accumulatedTime < timeLeft);

  return orders.slice(ordersCounter);

}
