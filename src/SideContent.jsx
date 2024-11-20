import '/styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AcceptImage(ev) {
    const [image, setImage] = useState(null);
    // Prevent browser from opening file when dropped
    ev.preventDefault();
    setImage(document.getElementsByClassName("highlight-div").files[0]);
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementsByClassName("image-preview").src = e.target.value;
    }
    reader.readAsDataURL(image);
}

function Test() {
    const [imagePreview, setImagePreview] = useState(null);
    const uploadButton = document.getElementsByClassName("upload-button")
    
}

// may need separate functions for drag as well as drop?
// currently the AcceptImage function is bit off a little bit of both ideas
// this should be decided before i continue further.

// i may have misunderstood what the drag and drop api is
// i should be able to get away with smth like, clicking on the
// drag-div will bring up a file selector.
// i believe FileReader api is what i will need to use after
// the image is sent.

// i need to find an appropriate input type in order to make it
// look close to how the drag-div behaves, with changing the
// background color on hover. 

// i might be getting caught up on the "correct" way to do this,
// when i could find a solution that works and then work from there.
// a button element could be fine here possibly

function SideContent() {
    return (
        <>
        <div className="default-side-div">
            <div className='inner-div'>
                <button className='upload-button'>
                    <div className='highlight-div'>
                        <img className='image-preview' 
                             src=''
                        ></img>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon'/>
                    </div>
                </button>
            </div>
            <div className='side-options'>
                <a>FAQ</a>
                <a>Title</a>
                <a>Credits</a>
                <a>Compatibility</a>
                <a>Export</a>
            </div>
        </div>
        </>
    )
}

export default SideContent