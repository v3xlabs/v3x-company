import { FaBrandsDiscord } from 'solid-icons/fa';

export const ChatDiscord = () => {
    return (
        <div class="w-full lborder rounded-md p-4 flex flex-col gap-1">
            <h2 class="font-bold">
                Join us on <span class="text-[#5865f2]">Discord</span>
            </h2>
            <p class="grow">
                We chat everday about random stuff and build cool things, just
                don't look in #vc-text
            </p>
            <a
                href="https://v3x.vc"
                target="_blank"
                class="flex w-fit text-center font-bold items-center gap-2 bg-[#5865f2] text-white px-4 ml-auto mt-2 py-2 rounded-md drop-shadow text-sm"
            >
                Open Discord
                <FaBrandsDiscord />
            </a>
        </div>
    );
};
