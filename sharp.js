const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'src/public/images/imagesoptimazed');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, {
    recursive: true,
  });
}

fs.readdirSync(destination).forEach((file) => {
  const filePath = path.resolve(destination, file);
  fs.unlinkSync(filePath);
});

fs.readdirSync(target).forEach((image) => {
  const imageFilePath = path.resolve(target, image);
  const imageFileName = path.parse(image).name;

  sharp(imageFilePath)
    .resize(1400)
    .toFile(path.resolve(destination, `${imageFileName}-large.jpg`));

  sharp(imageFilePath)
    .resize(1200)
    .toFile(path.resolve(destination, `${imageFileName}-meduim.jpg`));

  sharp(imageFilePath)
    .resize(900)
    .toFile(path.resolve(destination, `${imageFileName}-small.jpg`));
});
