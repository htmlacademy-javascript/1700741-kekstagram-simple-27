import {generateGalleryPhotos} from './data.js';
import {renderPictures} from './pictures.js';
const newGalleryPhotos = generateGalleryPhotos(25);
renderPictures(newGalleryPhotos);
console.log('main ggp ' + generateGalleryPhotos(25));
console.log('main ngp ' + newGalleryPhotos);
