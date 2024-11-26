import '/styles/index.css'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faAngleRight, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
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
    let [dim, setDim] = useState("hidden");

    function toggleDim() {
        const dimDiv = document.getElementById("dim-div");
        if (dimDiv.className === "dark") {
            dimDiv.className = "hidden"
            console.log(dimDiv.className)
        } else if (dimDiv.className === "hidden") {
            dimDiv.className = "dark"
            console.log(dimDiv.className)
        } else {
            return;
        }
    }

    // the motion effect below will translate based on the x value.
    // for it to work properly though, i have to position it to its
    // position before its moved. this doesnt work here because
    // a flex-box is there. i can fix this by removing flex
    // and positioning things like they are now. it may not be
    // the best option so i have to consider if its the right
    // choice or not.

    // i could maybe put a gap between each div, and then 
    // animate them? i will have to test that.

    // it seemed like that worked! the spacing is a bit weird but
    // thats an issue on my end. i will keep fiddling with it

    return (
        <>
        <motion.div animate={{ x: 90 }} className="default-side-div">
            <div className='inner-div'>
                <button className='upload-button' onClick={() => {setIsOpen(true); toggleDim()}}>
                    <div className='highlight-div'>
                        <img 
                            className='image-preview' 
                            src=''
                        ></img>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon'/>
                    </div>
                </button>
                <input hidden='true' type='file'></input>
            </div>
            <div className='side-options'>
                <a>FAQ <FontAwesomeIcon icon={faAngleRight} /></a>
                <a>Title <FontAwesomeIcon icon={faAngleRight} /></a>
                <a>Credits <FontAwesomeIcon icon={faAngleRight} /></a>
                <a>Compatibility <FontAwesomeIcon icon={faAngleRight} /></a>
                <a>Export <FontAwesomeIcon icon={faAngleRight} /></a>
            </div>
        </motion.div>
        <Dialog open={isOpen} onClose={() => {setIsOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <DialogTitle>Upload Image</DialogTitle>
                    <div className='modal-box'><FontAwesomeIcon icon={faFileImage} /></div>
                    <button>Submit</button>
                </DialogPanel>
            </div>
        </Dialog>
        <div id="dim-div" className={dim}></div>
        </>
    )
}

export default SideContent