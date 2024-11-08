import '/styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

function SideContent() {
    return (
        <>
        <div className="default-side-div">
            <div className='inner-div'>
                <div className='drag-div'>
                    <div className='highlight-div'>
                        <FontAwesomeIcon icon={faDownLong} className='arrow-icon'/>
                    </div>
                </div>
            </div>
            <ul className=''>
                <li>FAQ</li>
                <li>Title</li>
                <li>Credits</li>
                <li>Compatibility</li>
                <li>Export</li>
            </ul>
        </div>
        </>
    )
}

export default SideContent