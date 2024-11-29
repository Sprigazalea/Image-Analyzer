import '/styles/index.css'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faAngleRight, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { useState, useRef } from 'react'

function AcceptImage() {
    console.log("success!")
}

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