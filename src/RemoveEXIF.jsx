export default function RemoveEXIF(imageFile) {
    const ExifTransformer = require('exif-be-gone')
    const fs = require("fs")

    const image = imageFile
    let exportImage 

    const reader = fs.createReadStream(image)
    const writer = fs.createWriteStream(exportImage)

    reader.pipe(new ExifTransformer()).pipe(writer)

    return(exportImage)
} 