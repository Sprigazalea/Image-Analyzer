export default function RemoveEXIF(imageFile) {
    const ExifTransformer = require('exif-be-gone')
    const fs = require("fs")

    const image = imageFile

    const reader = fs.createReadStream(image)
    const writer = fs.createWriteStream((data) => {setImageFile(data)})

    reader.pipe(new ExifTransformer()).pipe(writer)
} 