'use client';

import { motion } from 'framer-motion';

export default function WavingHands() {
    return (
        <motion.h1
            className="header"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
            👋
        </motion.h1>
    )
}
