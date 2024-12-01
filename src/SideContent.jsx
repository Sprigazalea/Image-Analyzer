import '/styles/index.css'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faAngleRight, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { useState, useRef, useEffect } from 'react'



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
            setDim("hidden")
        } else if (dimDiv.className === "hidden") {
            setDim("dark")
        } else {
            return;
        }
    }

    function AcceptImage() {
        const image = document.getElementById('image-upload').files[0].name;
        const target = document.getElementById('image-file-name');

        target.innerText = image 
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
                        <input id='image-upload' accept='image/*' onChange={AcceptImage} type="file" ref={inputFile} style={{display: 'none'}}></input>
                        <button onClick={onButtonClick}>Test</button>
                        <p id='image-file-name'></p>
                    </div>
                    <button>Submit</button>
                </DialogPanel>
            </div>
        </Dialog>
        <div id="dim-div" className={dim}></div>
        </>
    )
}

// i think it will be necessary to do some of the logic of the 
// image processing in its own file, that way sidecontent and
// maincontent can access either of its needed info when 
// needed, if it works the way i think it works

// a part of the logic in this file might need to be moved
// to different files for different purposes, maybe split
// into their own files? not sure yet. but i need to decide
// now before continuing forward

export default SideContent