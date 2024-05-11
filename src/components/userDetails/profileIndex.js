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
                            <div className='flex bg-white h-40 p-5 border-2 border-gray duration-200 hardShadow items-center'>
                                <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='text-2xl'>My Details</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-2'>Name, Mobile, Email, Address</p>
                                    </div>
                                    <Image
                                        src="/images/icons/profile.svg"
                                        alt="Personal Details" 
                                        width={55}
                                        height={55}
                                        className='ml-5'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profileAddress">
                        <div className='flex bg-white h-40 p-5 border-2 border-gray duration-200 hardShadow items-center'>
                            <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='text-2xl'>Security</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-2'>Username, Password</p>
                                    </div>
                                    <Image
                                        src="/images/icons/lock.svg"
                                        alt="Personal Details" 
                                        width={65}
                                        height={65}
                                        className='ml-5'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profileOrders">
                            <div className='flex bg-white h-40 p-5 border-2 border-gray duration-200 hardShadow items-center'>
                                <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='text-2xl'>Orders</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-2'>Track, Cancel an Order, Returns, Invoice</p>
                                    </div>
                                    <div className='ml-5'>
                                        <Image
                                            src="/images/icons/box.svg"
                                            alt="Personal Details" 
                                            width={85}
                                            height={85}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        <Link href="./profilePayment">
                            <div className='flex bg-white h-40 p-5 border-2 border-gray duration-200 hardShadow items-center'>
                               <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='text-2xl'>Returns</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-2'>Credit Card, Transactions</p>
                                    </div>
                                    <Image
                                        src="/images/icons/racquet.svg"
                                        alt="Personal Details" 
                                        width={75}
                                        height={75}
                                        className='ml-5'
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href="./profileReturns">
                            <div className='flex bg-white h-40 p-5 border-2 border-gray duration-200 hardShadow items-center'>
                                <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='text-2xl'>My Racquet</h3>
                                        <p className='text-gray-500 font-KozGoPr6NRegular mt-2'>Brand, String, Type</p>
                                    </div>
                                    <Image
                                        src="/images/icons/payment.svg"
                                        alt="Personal Details" 
                                        width={90}
                                        height={90}
                                        className='ml-5'
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