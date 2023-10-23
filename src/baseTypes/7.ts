/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum workDays {
  Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday
}

const isWeekend = (day: workDays) => {
  return day === workDays.Monday || day === workDays.Saturday
}