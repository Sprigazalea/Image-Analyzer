import '/styles/index.css';
import Test from './Test.jsx';
import { motion } from "motion/react"

// implement tiptap rich text editor here

function MainContent() {
    return (
        <>
            <motion.div animate={{ x: -100 }}className='default-div'>
                <Test />
            </motion.div>
        </>
    )
}

export default MainContent