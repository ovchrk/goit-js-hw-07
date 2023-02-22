import { galleryItems } from "./gallery-items.js";
// Change code below this line
// const basicLightbox = require("basiclightbox");
// import * as basicLightbox from "basiclightbox";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createImageGallery(galleryItems);

galleryRef.addEventListener("click", galleryClickHandler);

// console.log(galleryItems);

function createImageGallery(galleryItems) {
  const galleryElementMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class = "gallery__item">
      <a class="gallery__link" href="large-image.jpg">
      <img src = "${preview}" 
      class = "gallery__image"
      data-source="${original}"
      alt="${description}">
      </a>
      </div>`;
    })
    .join("");
  return galleryElementMarkup;
  //   console.log(galleryElementMarkup);
}
// console.log(createImageGallery(galleryItems));

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function galleryClickHandler(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  // console.log(evt.target.dataset.source);

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  // Closing on escape btn

  galleryRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

// const instance = basicLightbox.create(`
//     <img src="${original}" width="800" height="600">
// `);

// instance.show();

// srcset = "${preview} 1x, ${original} 2x";
