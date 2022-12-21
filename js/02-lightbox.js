"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const photoLink = document.createElement("a");
  photoLink.setAttribute("href", item.original);
  photoLink.classList.add("gallery__item");

  const photo = document.createElement("img");
  photo.src = item.preview;
  photo.setAttribute("alt", item.description);
  photo.classList.add("gallery__image");

  photoLink.append(photo);
  galery.append(photoLink);
});

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  /* options */
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  enableKeyboard: true,
});

lightbox.on("show.simplelightbox", function () {
  console.log("lighbox otwarty");
});

lightbox.on("closed.simplelightbox", function () {
  console.log("lightbox zamkniety");
});
