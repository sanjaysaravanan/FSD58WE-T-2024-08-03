var image = 1;

/* var aTag = document.querySelector(".parent > button > a");

aTag.setAttribute("href", `#image-${image}`); */

const handleNext = () => {
  image = image + 1;

  const imageElement = document.querySelector(`#image-${image}`);

  imageElement.scrollIntoView({
    behavior: "smooth",
  });

  /* aTag.setAttribute("href", `#image-${image}`); */
};

const handlePrev = () => {
  image = image - 1;

  const imageElement = document.querySelector(`#image-${image}`);

  imageElement.scrollIntoView({
    behavior: "smooth",
  });

  /* aTag.setAttribute("href", `#image-${image}`); */
};
