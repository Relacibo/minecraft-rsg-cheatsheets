import "../css/style.css";
import content from '../html/content.html'
import * as htmlToImage from 'html-to-image';

document.body.innerHTML = content;

/*htmlToImage.toSvg(document.getElementById('my-node'), { filter: filter })
.then(function (dataUrl) {
  //do something 
});*/