import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-[#FFFAFB] pt-5 dark:bg-gray-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between content-center mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/Logo.png" className="h-10 w-12" alt="Logo" />
                </a>
                <div className="grow-1 ps-12 md:ps-28 pt-2.5">
                    <ul className='flex flex-wrap gap-10 text-[#3A1212] text-[24px] font-[Alegreya]'>
                        <li className='cursor-pointer group relative'>
                            <a href="/" className='hover:text-[red] transition-colors ease-in-out duration-500 py-1'>Home</a>
                            <div className='absolute bottom-[2px] bg-[red] h-[3px] w-0 group-hover:w-[58px] transition-all ease-in-out duration-500'></div>
                        </li>
                        <li className='cursor-pointer group relative p-0'>
                            <a href="/exercises" className='hover:text-[red] transition-colors ease-in-out duration-500 py-1'>Exercises</a>
                            <div className='absolute bottom-[2px] bg-[red] h-[3px] w-0 group-hover:w-[92px] transition-all ease-in-out duration-500'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
