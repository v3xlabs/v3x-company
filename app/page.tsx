import { FiGithub } from 'react-icons/fi';

export default function App() {
    return (
        <div className="mx-auto flex items-center justify-center px-4 md:px-8">
            <div
                className="grid w-full"
                style={{
                    gridTemplateRows: 'masonry',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1rem',
                }}
            >
                <div className="relative w-full bg-blue-400 col-span-7 row-span-3 rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20"></div>
                    <div className="absolute left-8 top-8 right-8 flex justify-between">
                        <div className="grow">
                            <h2 className="text-7xl text-white font-bold font-inter">
                                ENS Cards
                            </h2>
                            <p className="text-2xl text-white font-inter">
                                Swag Printing w Magical Powers
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://og.ax"
                                target="_blank"
                                className="font-bold px-4 py-2 bg-neutral-50 h-fit rounded-md hover:brightness-105 transition-all duration-200 hover:outline outline-[#1e1e1e]"
                            >
                                <FiGithub />
                                Github
                            </a>
                        </div>
                    </div>
                    <img
                        src="/cards.svg"
                        alt=""
                        className="absolute bottom-0 left-0 right-0"
                    />
                </div>
                <div className="w-full bg-pink-200 col-span-5 h-[512px] row-span-2 rounded-md" />
                <div className="w-full bg-gray-200 h-48 col-span-5 row-span-1 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-12 rounded-md" />
            </div>
        </div>
    );
}
