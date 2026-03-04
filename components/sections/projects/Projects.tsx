import { FaBrandsRust, FaBrandsDocker, FaSolidGlobe } from 'solid-icons/fa';
import { SiNpm } from 'solid-icons/si';

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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                {
                    name: 'v3xlabs/edgeserver',
                    description:
                        'Next-gen lightweight modern ethical webserver',
                    link: 'https://github.com/v3xlabs/edgeserver',
                    language: 'rust',
                    type: 'container',
                },
                {
                    name: 'v3xlabs/code-fishing',
                    description:
                        'A rust (the game) code raiding tool that helps coordinate code raids',
                    link: 'https://code.fishing',
                    source: 'https://github.com/v3xlabs/code-fishing',
                    language: 'rust',
                    type: 'web',
                },
                {
                    name: 'v3xlabs/enstate',
                    description:
                        'ENS JSON API & Cloudflare Worker written in Rust',
                    link: 'https://github.com/v3xlabs/enstate',
                    language: 'rust',
                    type: 'container',
                },
                {
                    name: 'v3xlabs/mission-control',
                    description:
                        'Lightweight Information Display Management Daemon for Home Assistant',
                    link: 'https://github.com/v3xlabs/mission-control',
                    language: 'rust',
                    type: 'container',
                },
                {
                    name: 'ensdomains/docs',
                    description: 'Main documentation site for the ENS protocol',
                    link: 'https://github.com/ensdomains/docs',
                    language: 'typescript',
                    type: 'web',
                },
                {
                    name: 'ensdomains/frensday',
                    description:
                        'frENSday is an anual event for the ENS community',
                    link: 'https://frensday.ens.domains',
                    type: 'web',
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
                <div class="w-full lborder rounded-md prose">
                    <div class="p-4 flex flex-col h-full" key={entry.name}>
                        <a
                            href={entry.link}
                            target="_blank"
                            class="link font-bold block mb-1"
                        >
                            {entry.name}
                        </a>
                        <p class="grow">{entry.description}</p>
                        <div class="flex items-center mt-2 gap-2 text-xs text-neutral-500">
                            {entry.language && (
                                <div class="flex items-center gap-1">
                                    <div
                                        class="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor:
                                                language_to_color[
                                                    entry.language
                                                ],
                                        }}
                                    ></div>
                                    <span>
                                        {language_to_label[entry.language]}
                                    </span>
                                </div>
                            )}
                            {entry.type === 'package' && (
                                <div class="text-red-700 flex gap-1 items-center">
                                    <SiNpm />
                                    <span>Package</span>
                                </div>
                            )}
                            {entry.type === 'crate' && (
                                <div class="text-orange-500 flex gap-1 items-center">
                                    <FaBrandsRust />
                                    <span>Crate</span>
                                </div>
                            )}
                            {entry.type === 'container' && (
                                <div class="text-blue-500 flex gap-1 items-center">
                                    <FaBrandsDocker />
                                    <span>Container</span>
                                </div>
                            )}
                            {entry.type === 'web' && (
                                <div class="text-cyan-800 flex gap-1 items-center">
                                    <FaSolidGlobe />
                                    <span>Web</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
