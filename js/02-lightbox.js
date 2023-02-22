import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  const galleryElementMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" />
      </a>
      `;
    })
    .join("");
  return galleryElementMarkup;
  //   console.log(galleryElementMarkup);
}
// console.log(createImageGallery(galleryItems));

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

const photoGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "outside",
  fadeSpeed: 200,
  captionDelay: 250,
});

// function galleryClickHandler(evt) {
//   evt.preventDefault();

//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }

//   let gallery = new SimpleLightbox(".gallery a");
//   gallery.on("show.simplelightbox", function () {
//     // do something…
//   });

// console.log(evt.target.dataset.source);

//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}" width="800" height="600">`
//   );

//   instance.show();

//   // Closing on escape btn

//   galleryRef.addEventListener("keydown", (evt) => {
//     if (evt.code === "Escape") {
//       instance.close();
//     }
//   });
// }

// const instance = basicLightbox.create(`
//     <img src="${original}" width="800" height="600">
// `);

// instance.show();

// srcset = "${preview} 1x, ${original} 2x";
