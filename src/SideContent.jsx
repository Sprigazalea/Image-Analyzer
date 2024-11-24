import '/styles/index.css'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
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

function test() {
    const uploadButton = document.getElementsByClassName("upload-button");
    uploadButton.type = 'file';
    uploadButton.click();
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

// file dialog is not opening despite seemingly doing everything i
// need. all the examples use the input tag instead of button, so 
// maybe i *do* need to use input instead of button?

// input is definitely what i need. i was reminded modals exist so
// i will leave the look of the website as is, but then when the 
// highlight div is clicked, it will open a modal to select an image

function SideContent() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className="default-side-div">
            <div className='inner-div'>
                <button className='upload-button' onClick={() => setIsOpen(true)}>
                    <div className='highlight-div'>
                        <img className='image-preview' 
                             src=''
                        ></img>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon'/>
                    </div>
                </button>
                <input hidden='true' type='file'></input>
            </div>
            <div className='side-options'>
                <a>FAQ</a>
                <a>Title</a>
                <a>Credits</a>
                <a>Compatibility</a>
                <a>Export</a>
            </div>
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <DialogTitle>Upload Image</DialogTitle>
                    <Description>test</Description>
                </DialogPanel>
            </div>
            
        </Dialog>
        </>
    )
}

export default SideContent