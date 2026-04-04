import { useEffect, useState } from "react";
import type { Recipe } from "../types";

interface CuisineShowcaseProps {
  recipes: Recipe[]
}

// Call
const carouselItemsArray: HTMLElement[] = [];
// Function to show current item

export default function CuisineShowcase({recipes}: CuisineShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    showCurrentItem(currentIndex);

    function showCurrentItem(index: number) {
      setCurrentIndex(index);
      carouselItemsArray.forEach((item, itemIndex) => {
        itemIndex < index
          ? (item.style.transform = "translateX(-100%)")
          : itemIndex === index
            ? (item.style.transform = "translateX(0)")
            : //   Update 100% for linear movement 👇👇🏼
              (item.style.transform = "translateX(-100%)");
        // Update control buttons
        //   Set active on dots based on index
        // controlDotsArray[itemIndex].classList.toggle("active", itemIndex === index);
      });
    }

    function next() {
      setCurrentIndex((currentIndex + 1) % carouselItemsArray.length);
      showCurrentItem(currentIndex);
    }

    // Previous
    function previous() {
      setCurrentIndex(
        (currentIndex - 1 + carouselItemsArray.length) %
          carouselItemsArray.length,
      );
      showCurrentItem(currentIndex);
    }

//     function autoMove() {
//   autoInterval = setInterval(() => {
//     setCurrentIndex((currentIndex + 1) % carouselItemsArray.length);
//     showCurrentItem(currentIndex);
//   }, 2000);
// }
  });
  return <div>

  </div>;
}
