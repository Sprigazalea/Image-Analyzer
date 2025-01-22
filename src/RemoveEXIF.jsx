import Compressor from "compressorjs";
import ParseImage from "./ParseImage";

export default function RemoveEXIF(imageFile) {
    let image = imageFile;

    new Compressor(image, {
        success(result) {
            const preview = document.getElementById('image-preview');
            const reader = new FileReader();

            reader.onload = r => {
                preview.src = r.target.result;
            }

            reader.readAsDataURL(result)
            ParseImage(result)
        }
    })
} 

// because ParseImage is used in the useEffect, it would be
// better to route this function in there

// either that, or add another useEffect to be used for 
// this function somehow. the former seems easier tho