import {generateGalleryPhotos} from './data.js';
import {renderPictures} from './pictures.js';
import {renderScaleImage} from './download.js';
import {renderEffectImage} from './download.js';
// import {renderEffectImage} from './download.js';
const newGalleryPhotos = generateGalleryPhotos(25);
renderPictures(newGalleryPhotos);
renderScaleImage();
renderEffectImage();

