export function debounce(fn, wait = 500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

export function throffle(fn, wait = 1000) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, wait);
  };
}
/**
 * @param {array} imgList
 * @param {number} viewHeight
 * @param {number} viewWidth
 */
export const imageLazyload = (
  imgList,
  viewWidth = window.innerWidth,
  viewHeight = window.innerHeight
) => {
  for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].getAttribute("data-src")) {
      const { left, top } = imgList[i].getBoundingClientRect();
      let isInView =
        left >= 0 && left <= viewWidth && top >= 0 && top <= viewHeight;
      if (isInView) {
        imgList[i].src = imgList[i].getAttribute("data-src");
        imgList[i].removeAttribute("data-src");
      }
    }
  }
};
