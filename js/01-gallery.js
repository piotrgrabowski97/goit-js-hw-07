import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galery = document.querySelector(".gallery");

let instance = basicLightbox.create(`
    <img src="" alt="">
`);

galleryItems.forEach((item) => {
  const photoBox = document.createElement("div");
  photoBox.classList.add("gallery__item");

  const photoLink = document.createElement("a");
  photoLink.setAttribute("href", item.original);
  photoLink.classList.add("gallery__link");

  const photo = document.createElement("img");
  photo.src = item.preview;
  photo.setAttribute("alt", item.description);
  photo.setAttribute("data-source", item.original);
  photo.classList.add("gallery__image");

  photoLink.append(photo);
  photoBox.append(photoLink);
  galery.append(photoBox);
});

const imgHandler = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  instance = basicLightbox.create(`
    <img src=${event.target.getAttribute(
      "data-source"
    )} alt = "${event.target.getAttribute("alt")}" >
`);
  instance.show();
};
galery.addEventListener("click", imgHandler);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance.visible()) instance.close();
});
