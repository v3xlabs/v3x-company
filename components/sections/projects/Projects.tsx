import { FaDocker, FaGlobe } from 'react-icons/fa';
import { GiCargoCrate } from 'react-icons/gi';
import { SiNpm } from 'react-icons/si';

const language_to_color = {
    rust: '#dea584',
    typescript: '#2b7489',
};

const language_to_label = {
    rust: 'Rust',
    typescript: 'TypeScript',
};

export const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                {
                    name: 'v3xlabs/enstate',
                    description:
                        'ENS JSON API & Cloudflare Worker written in Rust',
                    link: 'https://github.com/v3xlabs/enstate',
                    language: 'rust',
                    type: 'container',
                },
                {
                    name: 'v3xlabs/scyllo',
                    description: 'Moonlander scyllaDB library for typescript',
                    link: 'https://github.com/v3xlabs/scyllo',
                    language: 'typescript',
                    type: 'package',
                },
                {
                    name: 'ensdomains/ethers-ccip-read-rs',
                    description: 'Ethers-rs CCIP-Read Middleware',
                    link: 'https://github.com/ensdomains/ethers-ccip-read',
                    language: 'rust',
                    type: 'crate',
                },
                {
                    name: 'v3xlabs/sunflake',
                    description: 'Lightweight Snowflake IDs',
                    link: 'https://github.com/v3xlabs/sunflake',
                    language: 'typescript',
                    type: 'package',
                },
                {
                    name: 'v3xlabs/logger',
                    description: 'Logging library. prev @lvksh/logger',
                    link: 'https://github.com/v3xlabs/logger',
                    language: 'typescript',
                    type: 'package',
                },
                {
                    name: 'v3xlabs/ens-tools',
                    description: 'All your bits and bobs for ENS',
                    link: 'https://github.com/v3xlabs/ens-tools',
                    language: 'typescript',
                    type: 'package',
                },
                {
                    name: 'v3xlabs/redeez',
                    description:
                        'A simplified general-purpose queueing library',
                    link: 'https://github.com/v3xlabs/redeez',
                    language: 'typescript',
                    type: 'package',
                },
                {
                    name: 'v3xlabs/edit-ens-page',
                    description: 'Edit page for gasless ENS names',
                    link: 'https://github.com/v3xlabs/edit-ens-page',
                    language: 'typescript',
                    type: 'web',
                },
                {
                    name: 'v3xlabs/ens-page',
                    description: 'ens.page',
                    link: 'https://github.com/v3xlabs/ens-page',
                    language: 'typescript',
                    type: 'web',
                },
            ].map((entry) => (
                <div className="w-full border rounded-md prose">
                    <div className="p-4" key={entry.name}>
                        <a
                            href={entry.link}
                            target="_blank"
                            className="link font-bold block mb-1"
                        >
                            {entry.name}
                        </a>
                        <p className="">{entry.description}</p>
                        <div className="flex items-center mt-2 gap-2 text-xs text-neutral-500">
                            <div className="flex items-center gap-1">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{
                                        backgroundColor:
                                            language_to_color[entry.language],
                                    }}
                                ></div>
                                <span>{language_to_label[entry.language]}</span>
                            </div>
                            {entry.type === 'package' && (
                                <div className="text-red-700 flex gap-1 items-center">
                                    <SiNpm />
                                    <span>Package</span>
                                </div>
                            )}
                            {entry.type === 'crate' && (
                                <div className="text-orange-500 flex gap-1 items-center">
                                    <GiCargoCrate />
                                    <span>Crate</span>
                                </div>
                            )}
                            {entry.type === 'container' && (
                                <div className="text-blue-500 flex gap-1 items-center">
                                    <FaDocker />
                                    <span>Container</span>
                                </div>
                            )}
                            {entry.type === 'web' && (
                                <div className="text-cyan-800 flex gap-1 items-center">
                                    <FaGlobe />
                                    <span>Web</span>
                                </div>
                            )}
                            <span>Updated 9 hours ago</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
