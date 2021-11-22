import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>`
    ).join('');
}



const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });