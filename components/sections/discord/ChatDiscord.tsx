import { FiExternalLink } from 'react-icons/fi';

export const ChatDiscord = () => {
    return (
        <div className="w-full lborder rounded-md p-4 space-y-1">
            <h2 className="font-bold">
                Join us on <span className="text-[#8498FB]">Discord</span>
            </h2>
            <p>
                We chat everday about random stuff and build cool things, just
                don't look in #vc-text
            </p>
            <a
                href="https://v3x.vc"
                target="_blank"
                className="flex w-fit text-center font-bold items-center gap-2 bg-[#8498FB] text-white px-4 ml-auto mt-2 py-2 rounded-md drop-shadow text-sm"
            >
                Open Discord
                <FiExternalLink />
            </a>
        </div>
    );
};
