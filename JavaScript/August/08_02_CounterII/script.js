/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let curVal = init;
  return {
    increment: () => {
      return ++curVal;
    },
    decrement: () => {
      return --curVal;
    },
    reset: () => {
      return (curVal = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
