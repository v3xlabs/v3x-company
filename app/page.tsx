import { FaGithub, FaNpm } from 'react-icons/fa';

import { Card } from '../components/Card/Card';
import { LongCard } from '../components/Card/LongCard';
import { ProjectBox } from '../components/ProjectBox/ProjectBox';

export default function App() {
    return (
        <div className="mx-auto flex items-center justify-center px-10">
            <div className="flex-col flex md:grid w-full max-w-full md:grid-cols-3 gap-2 md:grid-rows-2">
                <LongCard>
                    <div className="">
                        <img
                            src="/cardbgimage.png"
                            className="w-full"
                            alt="joe"
                        />
                        <div className="absolute font-sans bottom-0 m-4 lg:m-8 gap-y-2">
                            <h1 className="md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-extrabold text-white">
                                ENS Cards
                            </h1>
                            <p className="md:text-xl lg:text-2xl xl:text-3xl text-base text-white opacity-80 font-semibold">
                                Magical Custom Swag
                            </p>
                        </div>
                        <a href="https://og.ax" target="_blank" rel="noreferer">
                            <FaGithub className="absolute top-0 left-0 m-4 lg:m-8 text-white text-2xl md:text-3xl lg:text-5xl" />
                        </a>
                    </div>
                </LongCard>
                <Card>
                    <div className="h-full w-full">
                        <img
                            src="/edgeserverbgimage.png"
                            className="h-full"
                            alt="joe"
                        />
                    </div>
                    <a
                        href="https://github.com/v3xlabs/edgeserver"
                        target="_blank"
                        rel="noreferer"
                    >
                        <FaGithub className="absolute top-0 left-0 m-4 lg:m-8 text-white text-2xl md:text-3xl lg:text-5xl" />
                    </a>
                    <div className="absolute font-sans bottom-0 m-4 lg:m-8 gap-y-2">
                        <h1 className="md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-extrabold text-white">
                            Edgeserver
                        </h1>
                        <p className="md:text-xl lg:text-2xl xl:text-3xl text-base text-white opacity-80 font-semibold">
                            Web3 Sites in Seconds
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className="h-full w-full">
                        <img
                            src="/enstoolsbg.png"
                            className="h-full"
                            alt="joe"
                        />
                        <div className="absolute font-sans bottom-0 m-4 lg:m-8 gap-y-2">
                            <h1 className="md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-extrabold text-white">
                                ENS Tools
                            </h1>
                            <p className="md:text-xl lg:text-2xl xl:text-3xl text-base text-white opacity-80 font-semibold w-56">
                                All your bits and bobs ENS
                            </p>
                        </div>
                        <p className="absolute top-16 left-10 text-9xl">🪄</p>
                        <div className="absolute m-4 lg:m-8 top-0 left-0">
                            <div className="relative flex md:gap-x-2 lg:gap-x-4">
                                <a
                                    href="https://github.com/v3xlabs/ens-tools  "
                                    className=""
                                    target="_blank"
                                    rel="noreferer"
                                >
                                    <FaGithub className=" text-white text-2xl md:text-3xl lg:text-5xl" />
                                </a>
                                <a
                                    href="https://www.npmjs.com/package/ens-tools"
                                    className=""
                                    target="_blank"
                                    rel="noreferer"
                                >
                                    <FaNpm className=" text-white text-2xl md:text-3xl lg:text-5xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="md:col-span-2 flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 gap-1">
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/scyllo-small.png#1"
                        url="https://github.com/v3xlabs/scyllo"
                        title="Scyllo"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/signed-rsvp-small.png#1"
                        url="https://github.com/v3xlabs/signed-rsvp"
                        title="Signed RSVP"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/worldname-small.png#1"
                        url="https://github.com/v3xlabs/worldcoin.name"
                        title="Worldcoin.name"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/sunflake-small.png#1"
                        url="https://github.com/v3xlabs/sunflake"
                        title="Sunflake"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/logger-small.png#1"
                        url="https://github.com/v3xlabs/logger"
                        title="Logger"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/redeez-small.png#1"
                        url="https://github.com/v3xlabs/redeez"
                        title="Redeez"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/permissio-small.png#1"
                        url="https://github.com/v3xlabs/permissio"
                        title="Permissio"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/eslint-small.png#1"
                        url="https://github.com/v3xlabs/eslint-v3xlabs"
                        title="ESLint"
                        className="col-span-1"
                    />
                    <ProjectBox
                        img="https://github.com/v3xlabs/.github/raw/master/projects/node-fullykiosk-small.png#1"
                        url="https://github.com/v3xlabs/node-fullykiosk"
                        title="Node FullyKiosk"
                        className="col-span-1"
                    />
                    <a
                        className="col-span-1 bg-gray-200 rounded-lg text-xs lg:text-base border-gray-800 border-[3px]"
                        href="https://github.com/V3XLabs"
                        target="_blank"
                        rel="noreferer"
                    >
                        <div className="flex flex-col justify-center items-center h-full row-span-1">
                            Find more on Github
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
