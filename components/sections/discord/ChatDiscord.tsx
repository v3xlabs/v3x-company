import { FaBrandsDiscord } from 'solid-icons/fa';

export const ChatDiscord = () => {
    return (
        <section class="compact-panel flex flex-col" aria-labelledby="discord-title">
            <h2 id="discord-title">
                Join us on <span class="text-[#5865f2]">Discord</span>
            </h2>
            <p class="mt-3 grow text-neutral-600 dark:text-neutral-300">
                We chat everday about random stuff and build cool things, just
                don't look in #vc-text
            </p>
            <a
                href="https://v3x.vc"
                target="_blank"
                rel="noreferrer"
                class="discord-link"
            >
                Open Discord
                <FaBrandsDiscord />
            </a>
        </section>
    );
};
