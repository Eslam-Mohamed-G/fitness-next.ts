import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-row'>
            <div className='grow border border-amber-900'>
                Home
            </div>
            <div className='border border-amber-400 w-[50%]'>
                <img src="/images/banner.png" alt="banner" className='w-full min-h-screen'/>
            </div>
            
        </div>
    )
}
