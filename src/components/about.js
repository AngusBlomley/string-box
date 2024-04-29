/* eslint-disable react/no-unescaped-entities */
import '../app/globals.css'
import useFadeLeft from "./animations";
import Image from 'next/image';

export default function About() {

    useFadeLeft();

    return (

        <section className="relative px-96 py-10 mt-36 w-full max-xl:p-5 max-2xl:p-20 max-lg:p-10 max-lg:mt-0 2xl:mb-20 pb-0">
            <Image
                alt="strings-breaking"
                src="/images/stock/asset2.webp"
                height={700}
                width={700}
                className="absolute right-96 mt-96 w-4/12 max-2xl:right-40 max-lg:hidden"
            />
            <div className="flex flex-row">
                <Image
                    alt="strings-breaking"
                    src="/images/stock/asset1.webp"
                    height={700}
                    width={700}
                    className="w-6/12 h-full shadow-2xl max-lg:hidden"
                />
                <div className="ml-24 bg-clay-red w-14 h-96 shadow-2xl max-lg:ml-0"></div>
                <h2 className="observe-fade-in leading-normal -ml-5 font-hiraKakuW8 font-bold text-midnight-blue text-6xl mb-10">HOW<br></br>WE<br></br>STRING</h2>
            </div>
            <div className="flex flex-row">
                <Image
                    alt="strings-breaking"
                    src="/images/stock/asset3.webp"
                    height={700}
                    width={700}
                    className="mt-20 w-6/12 h-full shadow-2xl max-lg:hidden"
                />
                <p className="w-1/3 mt-96 ml-20 max-2xl:ml-10 max-2xl:mt-80 max-lg:mt-0 max-lg:ml-0 max-lg:w-full"><br></br><br></br>We are a professional racquet stringing company that supplies high-quality strings from top brands. At StringBox, we understand that every player has their own preferences when it comes to strings, which is why we offer a wide selection of professional strings to choose from. Whether you're looking for a specific brand or a certain type of string, we have what you need.
                    <br></br><br></br>
                    In addition to our selection of professional strings, we also offer a unique service where you can send us your own strings or request a specific type of string that we don't carry in stock. This allows you to get exactly what you want, tailored to your specific needs.</p>
            </div>
        </section>
    )
};