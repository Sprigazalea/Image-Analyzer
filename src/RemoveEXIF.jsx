import exif from 'exif-js'

export default function RemoveEXIF(imageFile) {
    let image = imageFile

    exif.getData(image, function() {
        exif.remove(image);
        setImageFile(image)
    })

    const preview = document.getElementById('image-preview');
    const reader = new FileReader();

    reader.onload = r => {
        preview.src = r.target.result;
        
    }

    reader.readAsDataURL(image)
} 

// because ParseImage is used in the useEffect, it would be
// better to route this function in there

// either that, or add another useEffect to be used for 
// this function somehow. the former seems easier tho