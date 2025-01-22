import '/styles/index.css'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faAngleRight, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { useState, useRef, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import ParseImage from './ParseImage'
import RemoveEXIF from './RemoveEXIF'

function SideContent() {
    let [isUploadOpen, setIsUploadOpen] = useState(false);
    let [isFAQOpen, setIsFAQOpen] = useState(false);
    let [isCompatOpen, setIsCompatOpen] = useState(false);
    let [isCreditsOpen, setIsCreditsOpen] = useState(false);
    let [dim, setDim] = useState("hidden");
    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState(null);
    const inputFile = useRef(null);
    const imageFileNameRef = useRef();
    
    function MyDropzone() {
        const onDrop = useCallback(acceptedFiles => {
            const image = acceptedFiles[0]
    
            setImageFile(image)
            const preview = document.getElementById('image-preview')
            const reader = new FileReader()
    
            reader.onload = r => {
                preview.src = r.target.result;
            }
            reader.readAsDataURL(image)
            document.getElementById('arrow-icon').style.display = 'none';
        }, [])

        const {getRootProps, getInputProps} = useDropzone({onDrop})
    
        return (
            <div className='inner-div' {...getRootProps()}>
                <button className='upload-button' onClick={() => {setIsUploadOpen(true); toggleDim()}}>
                    <div className='highlight-div'>
                        <img 
                            id='image-preview' 
                            src=''
                        ></img>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon' id='arrow-icon'/>
                    </div>
                </button>
            </div>
        )
    }

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

    function AcceptImage() {
        // sets ImageFileName useState and adds innerText with file name

        const imgName = document.getElementById('image-upload').files[0].name;
        const target = document.getElementById('image-file-name');

        setImageFileName(imgName)
        target.innerText = imgName;
    }

    function SubmitImage() {
        const image = document.getElementById('image-upload').files[0];

        setImageFile(image) 
        const preview = document.getElementById('image-preview');
        const reader = new FileReader();

        reader.onload = r => {
            preview.src = r.target.result;
            
        }
        reader.readAsDataURL(image)
        document.getElementById('arrow-icon').style.display = 'none';
    }

    function NoImage() {
        if (!imageFile) {
            alert('No image uploaded!')
        }
    }

    useEffect(() => {
        ParseImage(imageFile)
    }, [imageFile])

    return (
        <>
        <motion.div animate={{ opacity: 1, x: 90 }} transition={{ type: "tween", stiffness: 100 }} initial={{ opacity: 0}} className="default-side-div">
            {MyDropzone()}
            <div className='side-options'>
                <a onClick={() => {setIsFAQOpen(true); toggleDim()}}><p>FAQ</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a onClick={() => {setIsCompatOpen(true); toggleDim()}}><p>Compatibility</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a onClick={() => {NoImage(); RemoveEXIF(imageFile)}}><p>Remove EXIF Data</p> <FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a onClick={() => {NoImage()}}><p>Export</p> <FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
                <a onClick={() => {setIsCreditsOpen(true); toggleDim()}}><p>Credits</p><FontAwesomeIcon icon={faAngleRight} className='right-icon'/></a>
            </div>
        </motion.div>
        <Dialog open={isUploadOpen} onClose={() => {setIsUploadOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <DialogTitle>Upload Image</DialogTitle>
                    <div className='modal-box'>
                        <FontAwesomeIcon icon={faFileImage} className='image-icon' />
                        <input id='image-upload' accept='image/*' onChange={AcceptImage} type="file" ref={inputFile} style={{display: 'none'}}></input>
                        <button className='file-select-button' onClick={onButtonClick}>Select File</button>
                        <p id='image-file-name' ref={imageFileNameRef}>{imageFileName}</p>
                    </div>
                    <button id='submit-image' onClick={() => {setIsUploadOpen(false); toggleDim(); SubmitImage()}}>Submit</button>
                </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={isFAQOpen} onClose={() => {setIsFAQOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <h2>What is this website?</h2>
                    <p>Essentially, it is a Web GUI for the EXIFR library. It takes images and outputs the metadata stored within.</p>
                    <h2>What metadata can it read?</h2>
                    <p>EXIFR</p>
                    <h2>Are there any privacy concerns I should worry about?</h2>
                    <p>Most likely not. The parsing done on the website does not interact with any server components, all running on javascript loaded locally.</p>
                </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={isCompatOpen} onClose={() => {setIsCompatOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <h2>Supported Files</h2>
                </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={isCreditsOpen} onClose={() => {setIsCreditsOpen(false); toggleDim()}} className='modal'>
            <div className='modal-div'>
                <DialogPanel className='modal-panel'>
                    <h2>Credits</h2>
                </DialogPanel>
            </div>
        </Dialog>
        <div id="dim-div" className={dim}></div>
        </>
    )
}

export default SideContent