import { ProjectBox } from '../components/ProjectBox/ProjectBox';

export default function App() {
    return (
        <div className="mx-auto flex items-center justify-center px-4 md:px-8">
            <div className="grid w-full max-w-full dagrid">
                <div className="relative w-full h-72 lg:h-auto bg-blue-400 col-span-2 lg:col-span-7 row-span-1 lg:row-span-3 rounded-3xl overflow-hidden">
                    <div className="absolute z-10 left-8 top-8 right-8 flex justify-between">
                        <div className="grow">
                            <h2 className="text-2xl lg:text-7xl text-white font-bold font-inter">
                                ENS Cards
                            </h2>
                            <p className="text-base lg:text-2xl text-white font-inter">
                                Swag Printing w Magical Powers
                            </p>
                        </div>
                    </div>
                    <img
                        src="/sheet/enscards/bg.jpeg"
                        alt=""
                        className="absolute bottom-0 left-0 right-0 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/0"></div>
                </div>
                <div className="text-sm md:text-base row-start-1 col-start-1 w-full bg-white border col-span-2 lg:col-span-5 lg:min-h-[420px] row-span-1 lg:row-span-2 rounded-md p-4 md:p-8">
                    <h2 className="text-base md:text-2xl">Hey there 👋</h2>
                    <p className="mt-2">
                        We are V3X Labs, a community of{' '}
                        <b>open-source developers</b> driven to{' '}
                        <b>make a difference</b>.
                    </p>
                    <p className="mt-2">
                        You might know us from some of our <b>projects</b>; such
                        as ENS Cards, ENS Tools, Scyllo & More
                    </p>
                </div>
                <div className="hidden md:flex w-full bg-gray-200 h-48 col-span-2 lg:col-span-5 row-span-1 rounded-md" />

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
