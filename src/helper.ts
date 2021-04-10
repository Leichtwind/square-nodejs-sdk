export const bigIntToNumber = (obj: any): any => {
  for (const key of Object.keys(obj)) {
    const value = obj[key];

    if (typeof value === 'bigint') {
      obj[key] = Number(value);
      continue;
    }

    if (typeof value === 'object') {
      obj[key] = bigIntToNumber(value);
    }
  }

  return obj;
};
