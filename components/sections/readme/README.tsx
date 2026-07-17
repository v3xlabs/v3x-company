import { FaBrandsDiscord, FaBrandsTwitter } from 'solid-icons/fa';
import { FiBookOpen, FiGithub } from 'solid-icons/fi';
import social from "../../../content/social.json";

const sponsorModules = import.meta.glob('../../../content/sponsors/*.json', { eager: true }) as Record<string, { default: Sponsor }>;
type Sponsor = {
  order: number;
  name: string;
  url: string;
  logo: string;
  containerClass: string;
  containerStyle?: string;
  imageClass: string;
};
const sponsors = Object.values(sponsorModules).map(mod => mod.default).sort((a, b) => a.order - b.order);

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
                        href={social.github}
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={social.discord}
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaBrandsDiscord />
                    </a>
                    <a
                        href={social.twitter}
                        target="_blank"
                        class="p-1 hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center rounded-md aspect-square w-7 h-7"
                    >
                        <FaBrandsTwitter />
                    </a>
                </div>
            </div>
            <div class="p-4 pt-3 space-y-2">
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
                    {sponsors.map((sponsor) => (
                        <a
                            href={sponsor.url}
                            target="_blank"
                            class={sponsor.containerClass}
                            style={sponsor.containerStyle ?? undefined}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                class={sponsor.imageClass}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
