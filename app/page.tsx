import { FaTwitter } from 'react-icons/fa6';
import { FiBookOpen, FiGithub } from 'react-icons/fi';

const language_to_color = {
    rust: '#dea584',
    typescript: '#2b7489',
};

const language_to_label = {
    rust: 'Rust',
    typescript: 'TypeScript',
};

export default function App() {
    return (
        <div className="mx-auto flex flex-col gap-4 items-center justify-center px-4 md:px-8 pt-8">
            <div className="w-full h-full max-w-3xl border rounded-md prose">
                <div className="px-6 py-3 flex gap-2">
                    <h1>V3X Labs</h1>
                    <span className="text-neutral-400">
                        - Empowering Opensource
                    </span>
                </div>
            </div>
            <div className="w-full h-full max-w-3xl border rounded-md prose">
                <div className="pl-2 border-b flex justify-between">
                    <div className="border-b-2 px-1 font-bold pt-1.5 pb-1 border-orange-400">
                        <button className="flex gap-1.5 items-center hover:bg-slate-50 px-1.5 py-1 rounded-md text-sm">
                            <FiBookOpen />
                            <span>README</span>
                        </button>
                    </div>
                    <div className="flex p-1 gap-1 w-fit items-center text-sm">
                        <a
                            href="https://github.com/v3xlabs"
                            target="_blank"
                            className="p-1 hover:bg-slate-100 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://twitter.com/v3xlabs"
                            target="_blank"
                            className="p-1 hover:bg-slate-100 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className="px-6 py-3">
                    <p>We create epic shit.</p>
                </div>
            </div>

            <div className="w-full h-full max-w-3xl border rounded-md prose">
                {[
                    {
                        name: 'v3xlabs/enstate',
                        description:
                            'ENS JSON API & Cloudflare Worker written in Rust',
                        link: 'https://github.com/v3xlabs/enstate',
                        language: 'rust',
                    },
                    {
                        name: 'ensdomains/ethers-ccip-read-rs',
                        description: 'Ethers-rs CCIP-Read Middleware',
                        link: 'https://github.com/ensdomains/ethers-ccip-read',
                        language: 'rust',
                    },
                    {
                        name: 'v3xlabs/edit-ens-page',
                        description: 'Edit page for gasless ENS names',
                        link: 'https://github.com/v3xlabs/edit-ens-page',
                        language: 'typescript',
                    },
                    {
                        name: 'v3xlabs/scyllo',
                        description: 'Edit page for gasless ENS names',
                        link: 'https://github.com/v3xlabs/edit-ens-page',
                        language: 'typescript',
                    },
                    {
                        name: 'v3xlabs/ens-page',
                        description: 'ens.page',
                        link: 'https://github.com/v3xlabs/ens-page',
                        language: 'typescript',
                    },
                ].map((entry) => (
                    <div
                        className="px-6 py-4 border-b last:border-b-0"
                        key={entry.name}
                    >
                        <a
                            href={entry.link}
                            target="_blank"
                            className="text-blue-500 font-bold"
                        >
                            {entry.name}
                        </a>
                        <p>{entry.description}</p>
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
                            <p className="">Updated 9 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
