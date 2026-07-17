import { FiExternalLink } from 'solid-icons/fi';
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import company from "../../content/company.json";
import social from "../../content/social.json";

export const Footer = () => {
    return (
        <footer class="mx-auto w-full max-w-6xl px-4 pb-12 pt-4 md:max-w-[111rem] sm:px-6">
            <div class="flex flex-col gap-3 border-t-2 border-notblack pt-5 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between dark:border-white dark:text-neutral-300">
                <div class="">
                    <span class="block">{company.companyName}</span>
                    <span class="text-neutral-500 dark:text-neutral-400">KvK {company.kvk}</span>
                </div>
                <div class="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center gap-2 text-neutral-500 transition-colors hover:text-notblack dark:text-neutral-400 dark:hover:text-white"
                    >
                        view more <FiExternalLink />
                    </a>
                </div>
            </div>
        </footer>
    );
};
