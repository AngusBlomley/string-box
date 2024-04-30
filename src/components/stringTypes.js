/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';
import '../app/globals.css'
import useFadeLeft from './animations';

function StringTypes() {

    useFadeLeft();

    return (
        <section id="string-types" className="py-0 w-9/12 mx-auto mt-36 max-lg:mx-0 max-lg:mt-5 max-lg:w-full max-2xl:mx-10">
            <div className="ml-56 mb-10 mt-0 relative max-lg:ml-10 max-lg:my-0 max-lg:mt-0">
                <div className="h-64 w-14 bg-clay-red absolute -z-10 -top-24 max-lg:-top-8 max-lg:h-40"></div>
                <h2 className="leading-snug ml-8 mt-0 text-6xl font-hiraKakuW8 font-bold text-midnight-blue z-10 relative max-lg:text-5xl max-lg:mt-10 max-lg:-mb-20 max-lg:leading-snug ">
                    STRING <br></br>TYPES
                </h2>
            </div>
            <div className="relative border-b-8 border-l-8 border-black mx-20 leading-normal shadow-2xl px-36 pb-20 mt-0 grid grid-cols-4 gap-y-10 border-5 max-lg:grid-cols-1 max-lg:mt-0 max-lg:mx-0 max-lg:my-0 max-lg:py-0 max-lg:pl-20 max-lg:pr-10 max-lg:border-0 max-lg:shadow-none max-2xl:mx-0">
                <h2 className='absolute text-2xl font-hiraKakuW8 text-midnight-blue transform -translate-x-20 translate-y-10 -rotate-90 max-lg:hidden'>Tension</h2>
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
                        className='max-lg:hidden'
                    />
                </div>

                {/*Row 2*/}
                <div></div>
                <div></div>
                <div></div>
                <div className='w-96 max-lg:w-full'>
                    <div className='h-7 w-7 bg-clay-red rounded-3xl -mb-7 -ml-10'></div>
                    <h1 className=' font-hiraKakuW8 font-extrabold text-2xl text-midnight-blue bold'>Polyester</h1>
                    <ul className='list-disc list-outside'>
                        <li className='mt-2'>A longer 'dwell-time' (time ball is on the strings) creates maximum 'flattening' of the ball for more control. Energy return is less - allowing players to use stiffer, more powerful racquets for today's game.</li>
                        <li className='mt-2'>Less energy return to the ball, a 'firmer-feel' giving extreme potential. Best for fast swing-speeds.</li>
                    </ul>
                </div>

                {/*Row 3*/}
                <div></div>
                <div></div>
                <div className='col-span-2'>
                    <div className='h-7 w-7 bg-clay-red rounded-3xl -mb-7 -ml-10'></div>
                    <h1 className=' font-hiraKakuW8 font-extrabold text-2xl text-midnight-blue'>Solid Core</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Commonly referred to as synthetic gut, the core with outer-wraps returns less energy to the ball.</li>
                        <li className='mt-2'>A nice crisp feel for a player who seeks basics in performance and value. Numerous variations can be found.</li>
                    </ul>
                </div>

                {/*Row 4*/}
                <div><Image
                    alt="ball-2"
                    src="/images/svg/ball2.svg"
                    height={200}
                    width={200}
                    className='absolute w-80 h-80 -translate-y-56 -translate-x-28 max-lg:hidden'
                /></div>
                <div className='col-span-2'>
                    <div className='h-7 w-7 bg-clay-red rounded-3xl -mb-7 -ml-10'></div>
                    <h1 className=' font-hiraKakuW8 font-extrabold text-2xl text-midnight-blue'>Multi Fiber</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Designed to perform like natural gut at a more affordable price.</li>
                        <li className='mt-2'>Is not negatively effected by moisture.</li>
                    </ul>
                </div>
                <div></div>

                {/*Row 5*/}
                <div className='col-span-2'>
                    <div className='h-7 w-7 bg-clay-red rounded-3xl -mb-7 -ml-10'></div>
                    <h1 className=' font-hiraKakuW8 font-extrabold text-2xl text-midnight-blue'>Natural Gut</h1>
                    <ul className='list-disc list-outside w-4/6 max-lg:w-full'>
                        <li className='mt-2'>Maximum ball-pocket depth helps retain more of the ball's incoming energy due to the ball retaining more of its original shape.</li>
                        <li className='mt-2'>Most efficient return of energy received.</li>
                        <li className='mt-2'>Gut adds power, comfort, and max shock/vibration reduction.</li>
                    </ul>
                </div>
                <div></div>
                <div className='flex justify-end items-end'><h2 className='text-2xl font-hiraKakuW8 text-midnight-blue transform translate-x-36 translate-y-16 max-lg:hidden'>Tension</h2></div>

            </div>
        </section>
    );
}

export default StringTypes;
