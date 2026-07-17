import { FiExternalLink } from 'solid-icons/fi';
import company from "../../content/company.json";
import social from "../../content/social.json";

export const Footer = () => {
    return (
        <footer class="w-full flex justify-between p-4 pb-48 max-w-4xl mx-auto">
            <div class="flex gap-2 items-center">
                <div class="">{company.companyName}</div>
                <div class="text-neutral-400">{company.kvk}</div>
            </div>
            <div>
                <ul class="flex gap-2">
                    <li>
                        <a
                            href={social.github}
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
