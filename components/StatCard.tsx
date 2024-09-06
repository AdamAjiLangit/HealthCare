'use client';

import clsx from "clsx";
import Image from "next/image";
import { motion } from 'framer-motion';

type StatCardProps = {
    type: "appointments" | "pending" | "cancelled";
    count: number;
    label: string;
    icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={clsx("stat-card", {
                "bg-appointments": type === "appointments",
                "bg-pending": type === "pending",
                "bg-cancelled": type === "cancelled",
            })}
        >
            <div className="flex items-center gap-4">
                <Image
                    src={icon}
                    height={32}
                    width={32}
                    alt="appointments"
                    className="size-8 w-fit"
                />
                <h2 className="text-32-bold text-white">{count}</h2>
            </div>

            <p className="text-14-regular text-white">{label}</p>
        </motion.div>
    );
};