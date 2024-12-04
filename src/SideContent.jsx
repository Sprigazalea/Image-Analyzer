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

    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState(null);
    const imageFileNameRef = useRef();

////////////////////////////////////////////////////////////////////////////////////

    const [rerendered, setRerendered] = useState(0);
    const resolveRef = useRef();

    useEffect(() => {
        if (!resolveRef.current) {
            return
        }
        resolveRef.current();
        resolveRef.current = null;
    }, [rerendered])

    const processSetState = () => {
        return new Promise (resolve => {
            resolveRef.current = resolve;
            setRerendered(current => current + 1);
        })
    }

////////////////////////////////////////////////////////////////////////////////////

    function onButtonClick() {
        inputFile.current.click()
    }

    function toggleDim() {
        // change so that when toggleDim is executed, the opacity
        // is changed directly, this can be done to add a transition

        // doing the above makes the dimDiv always on screen, making
        // everything unclickable, maybe i show the div and then
        // change opacity?
        const dimDiv = document.getElementById("dim-div");
        if (dimDiv.className === 'hidden') {
            setDim('dark')
        } else if (dimDiv.className === 'dark') {
            setDim('hidden')
        } else {
            return;
        }
    }

    async function AcceptImage() {
        const image = document.getElementById('image-upload').files[0].name;
        const target = document.getElementById('image-file-name');

        // setImageFileName needs to happen before anything below it can happen, also clear data when user uploads new photo

        console.log(imageFileNameRef.current.innerText)
        setImageFileName(image)
        await processSetState()
        target.innerText = imageFileName;
        console.log(imageFileNameRef.current.innerText)
    }

    function SubmitImage() {
        setImageFile(document.getElementById('image-upload').files[0]) 
        // setImageFile needs to happen before anything below it can happen, also clear data when user uploads new photo
        console.log(imageFile)
        const preview = document.getElementsByClassName('image-preview')
        const reader = new FileReader();

        reader.onload = r => {
            console.log(r.target.result)
        }
        reader.readAsDataURL(imageFile)
    }

    return (
        <>
        <motion.div animate={{ x: 90 }} transition={{ type: "tween", stiffness: 100 }} className="default-side-div">
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
                        <button className='file-select-button' onClick={onButtonClick}>Select File</button>
                        <p id='image-file-name' ref={imageFileNameRef}></p>
                    </div>
                    <button id='submit-image' onClick={() => {setIsOpen(false); toggleDim(); SubmitImage()}}>Submit</button>
                    {/* need to create 1. a state that stores the file when it is submitted and 2. have filename still display when closing and reopening dialog*/}
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