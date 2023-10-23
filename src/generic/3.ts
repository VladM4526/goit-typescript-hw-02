/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge <V extends object, U extends object> (objA: V, objB: U) {
  return Object.assign(objA, objB);
}

export {}