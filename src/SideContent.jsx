import '/styles/index.css'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faAngleRight, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { useState, useRef } from 'react'

function AcceptImage() {
    console.log("success!")
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
    const inputFile = useRef(null);

    function onButtonClick() {
        inputFile.current.click()
    }

    function toggleDim() {
        const dimDiv = document.getElementById("dim-div");
        if (dimDiv.className === "dark") {
            dimDiv.className = "hidden"
        } else if (dimDiv.className === "hidden") {
            dimDiv.className = "dark"
        } else {
            return;
        }
    }

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
            </div>
            <div className='side-options'>
                <a><p>FAQ</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a><p>Title</p> <FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a><p>Credits</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a><p>Compatibility</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a><p>Export</p> <FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
            </div>
        </motion.div>
        <Dialog open={isOpen} onClose={() => {setIsOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <DialogTitle>Upload Image</DialogTitle>
                    <div className='modal-box'>
                        <FontAwesomeIcon icon={faFileImage} className='image-icon' />
                        <input accept='image/*' onChange={AcceptImage} type="file" ref={inputFile} style={{display: 'none'}}></input>
                        <button onClick={onButtonClick}>Test</button>
                    </div>
                    <button>Submit</button>
                </DialogPanel>
            </div>
        </Dialog>
        <div id="dim-div" className={dim}></div>
        </>
    )
}

export default SideContent