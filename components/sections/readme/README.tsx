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
        <section class="panel prose lg:col-span-8 border-notblack dark:border-white" aria-labelledby="readme-title">
            <div class="panel-bar">
                <div class="panel-tab">
                    <div class="flex gap-1.5 items-center text-sm">
                        <FiBookOpen />
                        <span id="readme-title">README</span>
                    </div>
                </div>
                <div class="flex p-1 gap-1 w-fit items-center text-sm">
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="V3X Labs on GitHub"
                        class="icon-link"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={social.discord}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="V3X Labs on Discord"
                        class="icon-link"
                    >
                        <FaBrandsDiscord />
                    </a>
                    <a
                        href={social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="V3X Labs on X"
                        class="icon-link"
                    >
                        <FaBrandsTwitter />
                    </a>
                </div>
            </div>
            <div class="panel-content">
                <h2 class="border-b border-neutral-300 pb-2 text-sm font-bold dark:border-neutral-700">What we do</h2>
                <p class="leading-6 text-neutral-700 dark:text-neutral-300">We create epic shit.</p>
                <h2 class="border-b border-neutral-300 pb-2 text-sm font-bold dark:border-neutral-700">Funding</h2>
                <p class="leading-6 text-neutral-700 dark:text-neutral-300">
                    v3xlabs is entirely funded off of its contributions to the
                    open-source ecosystem, collaboration with larger
                    organizations, and through being the recipient of a variety
                    of grants.
                </p>
                <p class="leading-6 text-neutral-700 dark:text-neutral-300">
                    We would not be where we are today without the generous
                    contributions & support from the following:
                </p>
                <div class="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
                    {sponsors.map((sponsor) => (
                        <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noreferrer"
                            class={`${sponsor.containerClass} transition-transform duration-150 hover:-translate-y-0.5`}
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
        </section>
    );
};
