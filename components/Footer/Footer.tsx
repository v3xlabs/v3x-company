import { FiExternalLink } from 'react-icons/fi';

export const Footer = () => {
    return (
        <footer className="w-full flex justify-between p-4 pb-48 max-w-4xl mx-auto">
            <div className="flex gap-2 items-center">
                <div className="">V3X Labs BV.</div>
                <div className="text-neutral-400">88564401</div>
            </div>
            <div>
                <ul className="flex gap-2">
                    <li>
                        <a
                            href="https://github.com/v3xlabs"
                            target="_blank"
                            className="flex items-center gap-2 text-neutral-400 text-sm"
                        >
                            view more <FiExternalLink />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
