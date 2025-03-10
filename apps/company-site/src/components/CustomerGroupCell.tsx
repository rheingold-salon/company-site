"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Modal } from "@/components";

// CustomerGroupType
type CustomerGroup = {
    name: string,
    imagesFolder: string,
}

export function CustomerGroupCell({ customerGroup }: { customerGroup: CustomerGroup }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="relative group h-60 overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <Image
                    src={`/static/images/customers/${customerGroup.imagesFolder}/kategorien_${customerGroup.imagesFolder}.jpg`}
                    alt={customerGroup.name}
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                    className="z-[-1] transition-transform duration-500 saturate-150 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center hover:bg-opacity-0 transition-all duration-500">
                    <span className="text-black font-bold text-xl">
                        {customerGroup.name}
                    </span>
                </div>
            </div>
            {isModalOpen && (
                <Modal closeModal={() => setIsModalOpen(false)}>
                    <h2 className='text-xl font-bold mb-4'>{customerGroup.name}</h2>
                </Modal>
            )}
        </>
    );
}
