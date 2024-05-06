/* eslint-disable react/no-unescaped-entities */
import '../app/globals.css'
import useFadeLeft from "./animations";
import Image from 'next/image';

export default function About() {

    useFadeLeft();

    return (

        <section className="relative py-10 mt-36 max-lg:p-10 max-lg:mt-0 pb-0">
            <Image
                alt="strings-breaking"
                src="/images/stock/asset2.webp"
                height={600}
                width={600}
                className="absolute top-1/2 left-1/2 transform -translate-x-20 -translate-y-56 max-lg:hidden"
            />

            <div className="flex flex-row justify-center max-lg:justify-start">
                <Image
                    alt="strings-breaking"
                    src="/images/stock/asset1.webp"
                    height={600}
                    width={600}
                    className=" shadow-2xl max-lg:hidden"
                />
                <div className="ml-36 bg-clay-red w-14 h-96 shadow-2xl max-lg:ml-0 max-lg:h-64"></div>
                <h2 className="observe-fade-in leading-normal -ml-5 font-hiraKakuW8 font-bold text-midnight-blue text-5xl mb-10">HOW<br></br>WE<br></br>STRING</h2>
            </div>
            <div className="flex flex-row flex-grow justify-center">
                <Image
                    alt="strings-breaking"
                    src="/images/stock/asset3.webp"
                    height={700}
                    width={500}
                    className="mt-10 shadow-2xl max-lg:hidden"
                />
                <p className="w-[440px] mt-64 mb-4 ml-10 max-lg:mt-0 max-lg:ml-0 max-lg:w-full"><br></br><br></br>We are a professional racquet stringing company that supplies high-quality strings from top brands. At StringBox, we understand that every player has their own preferences when it comes to strings, which is why we offer a wide selection of professional strings to choose from. Whether you're looking for a specific brand or a certain type of string, we have what you need.
                    <br></br><br></br>
                    In addition to our selection of professional strings, we also offer a unique service where you can send us your own strings or request a specific type of string that we don't carry in stock. This allows you to get exactly what you want, tailored to your specific needs.</p>
            </div>
        </section>
    )
};