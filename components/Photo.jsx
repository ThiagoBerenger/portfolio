'use client'

import { motion } from "framer-motion"
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
            transition: {delay: 2, duration: .5, ease: 'easeIn'}
         }}    
        >
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,
                transition: {delay: 2.4, duration: .5, ease: 'easeInOut'}
             }}    
            className="w-[298] h-[298] xl:w-[498] xl:h-[498] mix-blend-lighten">
                <Image src='/assets/photo.png' 
                priority quality={100} 
                fill
                alt=""
                className="obect-contain rounded-full"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo