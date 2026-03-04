import { FaBrandsDiscord, FaBrandsTwitter } from 'solid-icons/fa';
import { FiBookOpen, FiGithub } from 'solid-icons/fi';

export const README = () => {
    return (
        <div class="w-full lborder rounded-md prose">
            <div class="pl-2 lborder-b flex justify-between">
                <div class="border-b-2 px-1 font-bold pt-1.5 pb-1 border-orange-400">
                    <button class="flex gap-1.5 items-center hover:bg-slate-50 dark:hover:bg-neutral-700 px-1.5 py-1 rounded-md text-sm">
                        <FiBookOpen />
                        <span>README</span>
                    </button>
                </div>
                <div class="flex p-1 gap-1 w-fit items-center text-sm">
                    <a
                        href="https://github.com/v3xlabs"
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://v3x.vc"
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaBrandsDiscord />
                    </a>
                    <a
                        href="https://twitter.com/v3xlabs"
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaBrandsTwitter />
                    </a>
                </div>
            </div>
            <div class="p-4 pt-3 space-y-2">
                {/* <div class="border-l-4 py-2 border-yellow-400 text-yellow-400 px-4 bg-yellow-400/10 w-fit italic">
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
                <div class="grid gap-2 grid-cols-1 md:grid-cols-4 pt-2">
                    <a
                        href="https://ethereum.foundation"
                        target="_blank"
                        class="p-4 flex items-center justify-center rounded-md bg-white lborder group"
                    >
                        <img
                            src="/logos/ef.svg"
                            alt="the Ethereum Foundation"
                            class="h-8 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://ens.domains"
                        target="_blank"
                        class="p-4 flex items-center justify-center rounded-md group"
                        style={{
                            background:
                                'linear-gradient(95deg, #8498FB 0.86%, #46BBF0 99.28%)',
                        }}
                    >
                        <img
                            src="/logos/ens_logo_light.svg"
                            alt="the Ethereum Name Service"
                            class="h-8 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://polygon.technology/"
                        target="_blank"
                        class="p-4 flex items-center justify-center rounded-md bg-[#8247E5] group"
                    >
                        <img
                            src="/logos/polygon.png"
                            alt="Polygon"
                            class="h-6 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://fireeyes.xyz/"
                        target="_blank"
                        class="p-4 flex items-center justify-center rounded-md bg-white lborder group"
                    >
                        <img
                            src="/logos/fireeyes.png"
                            alt="Fire Eyes"
                            class="h-4 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
