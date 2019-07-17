import lodash from 'lodash';

export function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

export function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}
let inThrottle = false;
export const throttle = (cb: Function, interval?: number) => {
  if (!inThrottle) {
    cb.apply(this);
    inThrottle = true;
    setTimeout(() => { inThrottle = false; }, interval || 3000);
  }
};

export const deepCopy = obj => {
  return lodash.cloneDeep(obj);
};

export function removeEmptyObjects(arr: Array<any>) {
  let newArray = [];
  arr.forEach(obj => {
    for (var key in obj) {
      if (obj[key]) {
        newArray.push(obj);
        return;
      }
  }});
  return newArray;
}
