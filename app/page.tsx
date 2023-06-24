import { FiGithub } from 'react-icons/fi';

import { ProjectBox } from '../components/ProjectBox/ProjectBox';

export default function App() {
    return (
        <div className="mx-auto flex items-center justify-center px-4 md:px-8">
            <div className="grid w-full max-w-full dagrid">
                <div className="relative w-full h-72 lg:h-auto bg-blue-400 col-span-2 lg:col-span-7 row-span-1 lg:row-span-3 rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20"></div>
                    <div className="absolute left-8 top-8 right-8 flex justify-between">
                        <div className="grow">
                            <h2 className="text-2xl lg:text-7xl text-white font-bold font-inter">
                                ENS Cards
                            </h2>
                            <p className="text-base lg:text-2xl text-white font-inter">
                                Swag Printing w Magical Powers
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://og.ax"
                                target="_blank"
                                className="flex items-center gap-2 font-bold px-4 py-2 bg-neutral-50 h-fit rounded-md hover:brightness-105 transition-all duration-200 hover:outline outline-[#1e1e1e]"
                            >
                                <FiGithub />
                                <span className="hidden lg:inline">Github</span>
                            </a>
                        </div>
                    </div>
                    <img
                        src="/cards.svg"
                        alt=""
                        className="absolute bottom-0 left-0 right-0"
                    />
                </div>
                <div className="w-full bg-pink-200 col-span-2 lg:col-span-5 h-32 lg:h-[420px] row-span-1 lg:row-span-2 rounded-md" />
                <div className="w-full bg-gray-200 h-48 col-span-2 lg:col-span-5 row-span-1 rounded-md" />

                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/ens-tools-small.png#1"
                    url="https://github.com/v3xlabs/ens-tools"
                    title="ENS Tools"
                    className="col-span-2 lg:col-span-4"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/scyllo-small.png#1"
                    url="https://github.com/v3xlabs/scyllo"
                    title="Scyllo"
                    className="col-span-2 lg:col-span-4"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/edgeserver-small.png#1"
                    url="https://github.com/v3xlabs/edgeserver"
                    title="EdgeServer"
                    className="col-span-2 lg:col-span-4"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/signed-rsvp-small.png#1"
                    url="https://github.com/v3xlabs/signed-rsvp"
                    title="Signed RSVP"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/worldname-small.png#1"
                    url="https://github.com/v3xlabs/worldcoin.name"
                    title="Worldcoin.name"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/sunflake-small.png#1"
                    url="https://github.com/v3xlabs/sunflake"
                    title="Sunflake"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/logger-small.png#1"
                    url="https://github.com/v3xlabs/logger"
                    title="Logger"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/redeez-small.png#1"
                    url="https://github.com/v3xlabs/redeez"
                    title="Redeez"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/permissio-small.png#1"
                    url="https://github.com/v3xlabs/permissio"
                    title="Permissio"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/eslint-small.png#1"
                    url="https://github.com/v3xlabs/eslint-v3xlabs"
                    title="ESLint"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/node-fullykiosk-small.png#1"
                    url="https://github.com/v3xlabs/node-fullykiosk"
                    title="Node FullyKiosk"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/eth-classify-small.png#1"
                    url="https://github.com/v3xlabs/eth-classify"
                    title="ETH Classify"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/cache-fns-small.png#1"
                    url="https://github.com/v3xlabs/cache-fns"
                    title="Cache Fns"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/error-fns-small.png#1"
                    url="https://github.com/v3xlabs/error-fns"
                    title="Error Fns"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/key-computer-small.png#1"
                    url="https://key.computer"
                    title="Key Computer"
                />
                <ProjectBox
                    img="https://github.com/v3xlabs/.github/raw/master/projects/ghchart-small.png#1"
                    url="https://github.com/v3xlabs/ghchart"
                    title="Github Chart"
                />
            </div>
        </div>
    );
}
