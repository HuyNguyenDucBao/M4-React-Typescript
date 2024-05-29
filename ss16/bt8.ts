const mergeObjects = <T extends object, U extends { [key: string]: any }>(
  obj1: T,
  obj2: U
): T & U => {
  const result: any = { ...obj1 };
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        result.hasOwnProperty(key) &&
        typeof result[key] === "object" &&
        typeof obj2[key] === "object"
      ) {
        result[key] = mergeObjects(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};

// Ví dụ sử dụng:
const object1 = { a: 1, b: 2, c: { d: 3 } };
const object2 = { a: 5, b: 6, c: { d: [7, 8], f: 9 }, e: 10 };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
