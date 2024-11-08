import '/styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

function SideContent() {
    return (
        <>
        <div className="default-side-div">
            <div className='inner-div'>
                <div className='drag-div'><FontAwesomeIcon icon={faDownLong} className='arrow-icon'/></div>
            </div>
        </div>
        </>
    )
}

export default SideContent