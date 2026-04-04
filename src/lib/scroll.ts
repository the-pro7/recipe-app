const scroller = document.querySelector(".scroller") as HTMLDivElement;

export const useAnimation = (scroller: HTMLDivElement) => {
  scroller.setAttribute("data-animate", "true");

  let scrollable = scroller.querySelector(".scroller__inner");
  let scrollableItems = [...scrollable!.children];
  scrollableItems.forEach((item) => {
    let duplicatedItem = item.cloneNode(true) as Element;
    duplicatedItem.setAttribute("aria-hidden", "true");
    scrollable?.appendChild(duplicatedItem);
  });
};

// if (!window.matchMedia("prefers-reduced-motion: reduce").matches) {
//   enableAnimation();
// }
