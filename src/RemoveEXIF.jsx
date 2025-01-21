export default function RemoveEXIF(imageFile) {

    const image = imageFile

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