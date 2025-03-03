'use client'

import { Modal, useModal } from '@faceless-ui/modal'
import Image from 'next/image'
import React from 'react'
import closeIcon from '../images/cross.svg'

const MenuModal = () => {
    const { toggleModal } = useModal();

    return (
        <Modal slug='menu' className='flex w-screen h-screen bg-background justify-center items-center text-white text-5xl relative'>
            <Image src={closeIcon} alt='close' className='absolute right-5 top-10' onClick={() => toggleModal('menu')} />
            <ul className="flex flex-col items-center justify-center gap-xsSpacing">
                <li>Espoo</li>
                <li>Helsinki</li>
                <li>Tampere</li>
                <li className='mb-12'>Turku</li>
                <li>Menu</li>
                <li>Contact us</li>
            </ul>

        </Modal>
    )
}

export default MenuModal