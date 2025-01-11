import '/styles/index.css';
import Test from './Test.jsx';
import { motion } from "motion/react"

// implement tiptap rich text editor here

function MainContent() {
    return (
        <>
            <motion.div animate={{ opacity: 1, x: -90 }} transition={{ type: "tween", stiffness: 100 }} initial={{ opacity: 0 }} className='default-div'>
                <Test />
            </motion.div>
        </>
    )
}

export default MainContent