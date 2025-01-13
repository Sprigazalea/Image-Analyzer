export default function RemoveEXIF(imageFile) {
    const ExifTransformer = require('exif-be-gone')
    const fs = require("fs")

    const image = imageFile
    let exportImage 

    const read = fs.createReadStream(image)
    const write = fs.createWriteStream(exportImage)

    read.pipe(new ExifTransformer()).pipe(write)

    setImageFile(exportImage)

    const preview = document.getElementById('image-preview');
    const reader = new FileReader();

    reader.onload = r => {
        preview.src = r.target.result;
        
    }

    reader.readAsDataURL(image)

    return(exportImage)
} 

// because ParseImage is used in the useEffect, it would be
// better to route this function in there

// either that, or add another useEffect to be used for 
// this function somehow. the former seems easier tho