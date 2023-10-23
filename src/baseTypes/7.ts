/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum workDays {
  Monday = "work day",
Tuesday = "work day",
Wednesday = "work day",
Thursday = "work day",
Friday = "work day",
Saturday = "day off",
Sunday = "day off"
}

const isWeekend = (day: workDays) => {
  return day === workDays.Monday || day === workDays.Saturday
}