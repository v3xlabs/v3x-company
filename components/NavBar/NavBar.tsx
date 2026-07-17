import company from "../../content/company.json";

export const NavBar = () => {
    return (
        <header class="2xl:absolute 2xl:left-0 w-auto p-8 flex flex-col gap-4 max-w-xs">
            <div class="flex flex-col justify-center whitespace-nowrap">
                <div class="bg-notblack w-fit font-bold">
                    <span class="text-white -1 mx-3">{company.shortName}</span>
                </div>
                <div>{company.tagline}</div>
            </div>
            <nav class="flex">
                <ul class="">
                    {company.navLinks.map((link) => (
                        <li>
                            <a
                                href={link.href}
                                class={[
                                    'hover:text-blue-500 hover:underline',
                                    link.label === '.company'
                                        ? 'text-blue-500 dark:text-blue-300'
                                        : 'text-notblack dark:text-white',
                                ].join(' ')}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
