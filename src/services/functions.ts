export const debounce = (() => {
  let timerId: any;

  return function (callback: any, delay: any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply();
    }, delay);
  };
})();
