import {generateGalleryPhotos} from './data.js';
import {renderPictures} from './pictures.js';
import {renderScaleImage} from './download.js';
import {renderEffectImage} from './download.js';
import {validateComments} from './validate.js';
import {addStyleToRangeByEffectsRadio} from './effect-level.js';
const newGalleryPhotos = generateGalleryPhotos(25);
renderPictures(newGalleryPhotos);
renderScaleImage();
renderEffectImage();
validateComments();
addStyleToRangeByEffectsRadio();


