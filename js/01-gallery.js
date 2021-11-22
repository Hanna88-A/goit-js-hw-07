import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onClickImage)





const cardIrems = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardIrems);

function createGalleryItems() {
    return galleryItems.map(({ preview, original, description }) => 
        
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`
    ).join('');
   
};

let instance;
function onClickImage(event) {

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    if (event.target.nodeName === 'IMG') {
        event.preventDefault();
    };
    const bigImage = event.target.dataset.source;
    console.log(event.target.nodeName);
    console.log(bigImage);

    instance = basicLightbox.create(`
    <img src=${bigImage} width="800" height="600">
    `);

    instance.show();
    galleryContainer.addEventListener('keydown', onPressingKeyboard)
    
   console.log(instance)
};



function onPressingKeyboard(event) {
 
    if (event.code === 'Escape') {
        instance.close();
    }
    else return;
    

    if (instance.close()) {
        galleryContainer.removeEventListener('keydown', onPressingKeyboard);
    }
    
    console.log(event.code);
    
}
