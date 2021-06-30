import "../css/style.css";
import * as htmlToImage from 'html-to-image';
if (process.env.NODE_ENV == 'development') {
  const body = require('../html/body.html').default;
  document.body.innerHTML = body;
}

document.getElementById("btn-generate-png")?.addEventListener("click", generatePNG);

function generatePNG() {
  const elementCheatsheets = document.getElementById('cheatsheets')
  if (elementCheatsheets == null) {
    return;
  }
  htmlToImage.toPng(elementCheatsheets, {width: 1920, height: 1080, canvasWidth: 1920, canvasHeight: 1080})
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'cheatsheets.svg';
      link.href = dataUrl;
      link.click();
    });
}
