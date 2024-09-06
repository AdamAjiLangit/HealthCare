import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IconFull() {
    return (
        <Link href="/" className="flex gap-1 items-center cursor-pointer">
            <Image
                src="/assets/icons/logo-icon.svg"
                height={32}
                width={162}
                alt="logo"
                className="h-8 w-fit"
            />
            <span className="font-semibold text-lg text-white">HealthCare</span>
        </Link>
    )
}
