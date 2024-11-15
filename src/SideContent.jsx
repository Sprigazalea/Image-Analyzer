import '/styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

function acceptImage() {
    const image = document.getElementsByClassName("highlight-div").files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById().src = e.target.value;
    }
    reader.readAsDataURL(image);
}

function SideContent() {
    return (
        <>
        <div className="default-side-div">
            <div className='inner-div'>
                <div className='drag-div'>
                    <div className='highlight-div'>
                        <image src=""></image>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon'/>
                    </div>
                </div>
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