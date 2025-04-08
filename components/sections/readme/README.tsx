import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { FiBookOpen, FiGithub } from 'react-icons/fi';

export const README = () => {
    return (
        <div className="w-full lborder rounded-md prose">
            <div className="pl-2 lborder-b flex justify-between">
                <div className="border-b-2 px-1 font-bold pt-1.5 pb-1 border-orange-400">
                    <button className="flex gap-1.5 items-center hover:bg-slate-50 dark:hover:bg-neutral-700 px-1.5 py-1 rounded-md text-sm">
                        <FiBookOpen />
                        <span>README</span>
                    </button>
                </div>
                <div className="flex p-1 gap-1 w-fit items-center text-sm">
                    <a
                        href="https://github.com/v3xlabs"
                        target="_blank"
                        className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://v3x.vc"
                        target="_blank"
                        className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="https://twitter.com/v3xlabs"
                        target="_blank"
                        className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div className="p-4 pt-3 space-y-2">
                {/* <div className="border-l-4 py-2 border-yellow-400 text-yellow-400 px-4 bg-yellow-400/10 w-fit italic">
                    <b>NOTE</b>
                    <br />
                    <span>
                        This page is currently under construction. Please check
                        back at a later date.
                    </span>
                    <br />
                    <span>
                        If this issue persists, try turning it off and on again.
                    </span>
                </div> */}
                <h2>What we do</h2>
                <p>We create epic shit.</p>
                <p></p>
                <p></p>
                <h2>Funding</h2>
                <p>
                    v3xlabs is entirely funded off of its contributions to the
                    open-source ecosystem, collaboration with larger
                    organizations, and through being the recipient of a variety
                    of grants.
                </p>
                <p>
                    We would not be where we are today without the generous
                    contributions & support from the following:
                </p>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-4 pt-2">
                    <a
                        href="https://ethereum.foundation"
                        target="_blank"
                        className="p-4 flex items-center justify-center rounded-md bg-white lborder group"
                    >
                        <img
                            src="/logos/ef.svg"
                            alt="the Ethereum Foundation"
                            className="h-8 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://ens.domains"
                        target="_blank"
                        className="p-4 flex items-center justify-center rounded-md group"
                        style={{
                            background:
                                'linear-gradient(95deg, #8498FB 0.86%, #46BBF0 99.28%)',
                        }}
                    >
                        <img
                            src="/logos/ens_logo_light.svg"
                            alt="the Ethereum Name Service"
                            className="h-8 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://polygon.technology/"
                        target="_blank"
                        className="p-4 flex items-center justify-center rounded-md bg-[#8247E5] group"
                    >
                        <img
                            src="/logos/polygon.png"
                            alt="Polygon"
                            className="h-6 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://fireeyes.xyz/"
                        target="_blank"
                        className="p-4 flex items-center justify-center rounded-md bg-white lborder group"
                    >
                        <img
                            src="/logos/fireeyes.png"
                            alt="Fire Eyes"
                            className="h-4 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
