// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  const WORKING_HOURS = 8;

  return WORKING_HOURS * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS_PER_MONTH = 22;

  const daysWithoutDiscount = numDays % BILLABLE_DAYS_PER_MONTH;
  const hoursBilledWithoutDiscount = daysWithoutDiscount * dayRate(ratePerHour);

  const fullMonths = Math.floor(numDays/BILLABLE_DAYS_PER_MONTH);
  const daysWithDiscount = fullMonths * BILLABLE_DAYS_PER_MONTH;
  const billedWithDiscount = (daysWithDiscount * dayRate(ratePerHour)) * (1 - discount);

  return Math.ceil(hoursBilledWithoutDiscount + billedWithDiscount);
}
