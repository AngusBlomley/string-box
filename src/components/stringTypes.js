/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';

function StringTypes() {


    return (
        <section id="string-types" className="py-0 w-full">
            <div className="ml-56 mb-10 mt-0 relative max-lg:ml-10 max-lg:my-0 max-lg:mt-20">
                <div className="h-40 w-10 bg-clay-red mr-72 absolute -z-10 -top-20"></div>
                <h2 className="ml-5 mt-0 text-7xl font-hiraKaku font-bold text-midnight-blue z-10 relative">
                    String Types
                </h2>
            </div>

            <div className="relative border-b-2 border-l-2 border-black mx-36 leading-normal pb-10 px-24 mt-40 grid grid-cols-4 gap-y-10 border-b-cyan-950 border-5 max-lg:grid-cols-1 max-lg:mx-0 max-lg:my-0 max-lg:py-0 max-lg:pl-20 max-lg:pr-10">

                <Image
                    alt="grid"
                    src="/images/svg/grid.svg"
                    height={1500}
                    width={1500}
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-80 w-1500 h-1500 -z-20'
                />
                {/* 
                <Image
                    alt="line"
                    src="/images/svg/line.svg"
                    height={1000}
                    width={1000}
                    className='absolute left-1/2 transform -translate-x-1/2 -translate-y-20'
                />
                */}

                {/*Row 1*/}
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <Image
                        alt="ball-1"
                        src="/images/svg/ball1.svg"
                        height={200}
                        width={200}
                        className=''
                    />
                </div>

                {/*Row 2*/}
                <div></div>
                <div></div>
                <div></div>
                <div className='w-96 max-lg:w-full'>
                    <div className='h-10 w-10 bg-clay-red rounded-3xl -mb-9 -ml-16'></div>
                    <h1 className=' font-hiraKakuW8 text-3xl text-midnight-blue'>Polyester</h1>
                    <ul className='list-disc list-outside'>
                        <li className='mt-2'>A longer 'dwell-time' (time ball is on the strings) creates maximum 'flattening' of the ball for more control. Energy return is less - allowing players to use stiffer, more powerful racquets for today's game.</li>
                        <li className='mt-2'>Less energy return to the ball, a 'firmer-feel' giving extreme potential. Best for fast swing-speeds.</li>
                    </ul>
                </div>

                {/*Row 3*/}
                <div>
                    <Image
                        alt="ball-2"
                        src="/images/svg/ball2.svg"
                        height={200}
                        width={200}
                        className='absolute w-80 h-96 -translate-y-56 max-lg:hidden'
                    />
                </div>
                <div></div>
                <div className='col-span-2'>
                    <div className='h-10 w-10 bg-clay-red rounded-3xl -mb-9 -ml-16'></div>
                    <h1 className=' font-hiraKakuW8 text-3xl text-midnight-blue'>Solid Core</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Commonly referred to as synthetic gut, the core with outer-wraps returns less energy to the ball.</li>
                        <li className='mt-2'>A nice crisp feel for a player who seeks basics in performance and value. Numerous variations can be found.</li>
                    </ul>
                </div>

                {/*Row 4*/}
                <div></div>
                <div className='col-span-2'>
                    <div className='h-10 w-10 bg-clay-red rounded-3xl -mb-9 -ml-16'></div>
                    <h1 className=' font-hiraKakuW8 text-3xl text-midnight-blue'>Multi Fiber</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Designed to perform like natural gut at a more affordable price.</li>
                        <li className='mt-2'>Is not negatively effected by moisture.</li>
                    </ul>
                </div>
                <div></div>

                {/*Row 5*/}
                <div className='col-span-2'>
                    <div className='h-10 w-10 bg-clay-red rounded-3xl -mb-9 -ml-16'></div>
                    <h1 className=' font-hiraKakuW8 text-3xl text-midnight-blue'>Natural Gut</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Maximum ball-pocket depth helps retain more of the ball's incoming energy due to the ball retaining more of its original shape.</li>
                        <li className='mt-2'>Most efficient return of energy received.</li>
                        <li className='mt-2'>Gut adds power, comfort, and max shock/vibration reduction.</li>
                    </ul>
                </div>
                <div></div>
                <div className='flex justify-end items-end'><h2 className='text-2xl font-hiraKakuW8 text-midnight-blue transform translate-y-20'>Tension</h2></div>

            </div>
        </section>
    );
}

export default StringTypes;
