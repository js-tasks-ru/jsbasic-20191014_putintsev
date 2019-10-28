/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  if (!(obj instanceof Object)) {
    return obj;
  }

  const objClone = {};

  for (const key in obj) {
    objClone[key] = clone(obj[key]);
  }
  return objClone;
}
