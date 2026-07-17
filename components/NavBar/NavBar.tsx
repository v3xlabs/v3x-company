import company from "../../content/company.json";

export const NavBar = () => {
    return (
        <header class="mx-auto w-full max-w-6xl px-4 pt-5 md:max-w-[111rem] sm:px-6 sm:pt-7">
            <div class="flex items-start justify-between">
                <a href="/" class="flex items-center gap-3 text-sm" aria-label="V3X Labs home">
                    <h1 class="bg-notblack px-3 py-1 font-bold text-white dark:bg-white dark:text-notblack">{company.shortName}</h1>
                    <span class="text-xs text-neutral-600 dark:text-neutral-300">{company.tagline}</span>
                </a>
            </div>
        </header>
    );
};
