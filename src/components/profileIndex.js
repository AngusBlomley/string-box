import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Image from 'next/image';
import Link from 'next/link';
export default function ProfileIndex() {

    return (
        <main>
            <div className="h-screen bg-off-white font-hiraKakuW8 text-stone-800 flex flex-col justify-center items-center max-lg:h-full max-lg:pb-20">
                <div className=''>
                    <h1 className="text-5xl ml-10 mb-20 max-lg:mt-40 max-sm:text-center max-sm:mb-10 max-sm:ml-0 max-lg:text-4xl">Profile Settings</h1>
                    <div className='grid grid-rows-2 grid-cols-3 gap-x-16 gap-y-24 px-10 max-lg:grid-cols-2 max-lg:gap-y-10 max-sm:grid-cols-1'>

                        <Link href="./profileDetails">
                            <div className='h-40 p-4 border-2 border-gray duration-200 hardShadow'>
                                <div className='flex row'>
                                    <div>
                                        <h3 className='text-2xl'>My Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-4'>Username, Password, Email</p>
                                    </div>
                                    <Image
                                        src="/images/icons/bxs-user-detail-black.png"
                                        alt="Personal Details" 
                                        width={24}
                                        height={0}
                                        className='w-12 h-12 mx-4'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profilePersonalDetails">
                            <div className='h-40 p-4 border-2 border-gray duration-200 hardShadow'>
                                <div className='flex row'>
                                    <div>
                                        <h3 className='text-2xl'>Personal Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-4'>Username, Password, Email</p>
                                    </div>
                                    <Image
                                        src="/images/icons/bxs-user-detail-black.png"
                                        alt="Personal Details" 
                                        width={24}
                                        height={0}
                                        className='w-12 h-12 mx-4'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profilePersonalDetails">
                            <div className='h-40 p-4 border-2 border-gray duration-200 hardShadow'>
                                <div className='flex row'>
                                    <div>
                                        <h3 className='text-2xl'>Personal Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-4'>Username, Password, Email</p>
                                    </div>
                                    <Image
                                        src="/images/icons/bxs-user-detail-black.png"
                                        alt="Personal Details" 
                                        width={24}
                                        height={0}
                                        className='w-12 h-12 mx-4'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profilePersonalDetails">
                            <div className='h-40 p-4 border-2 border-gray duration-200 hardShadow'>
                                <div className='flex row'>
                                    <div>
                                        <h3 className='text-2xl'>Personal Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-4'>Username, Password, Email</p>
                                    </div>
                                    <Image
                                        src="/images/icons/bxs-user-detail-black.png"
                                        alt="Personal Details" 
                                        width={24}
                                        height={0}
                                        className='w-12 h-12 mx-4'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profilePersonalDetails">
                            <div className='h-40 p-4 border-2 border-gray duration-200 hardShadow'>
                                <div className='flex row'>
                                    <div>
                                        <h3 className='text-2xl'>Personal Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-4'>Username, Password, Email</p>
                                    </div>
                                    <Image
                                        src="/images/icons/bxs-user-detail-black.png"
                                        alt="Personal Details" 
                                        width={24}
                                        height={0}
                                        className='w-12 h-12 mx-4'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};