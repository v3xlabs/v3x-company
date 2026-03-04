import { FiExternalLink } from 'solid-icons/fi';

export const Footer = () => {
    return (
        <footer class="w-full flex justify-between p-4 pb-48 max-w-4xl mx-auto">
            <div class="flex gap-2 items-center">
                <div class="">V3X Labs BV.</div>
                <div class="text-neutral-400">88564401</div>
            </div>
            <div>
                <ul class="flex gap-2">
                    <li>
                        <a
                            href="https://github.com/v3xlabs"
                            target="_blank"
                            class="flex items-center gap-2 text-neutral-400 text-sm"
                        >
                            view more <FiExternalLink />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
