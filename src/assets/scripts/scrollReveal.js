import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Scroll = ({name, children, transform, px, time}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div className={name}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? `${transform}(0)` : `${transform}(${px}px)`,
                transition: `all ${time}s`
            }}
            ref={ref}
        >
            {children}
        </motion.div>
    );
}