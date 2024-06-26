import { FC } from 'react';

export const NavBar: FC = () => {
    return (
        <header className="2xl:absolute 2xl:left-0 w-auto p-8 flex flex-col gap-4 max-w-xs">
            <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="bg-notblack w-fit font-bold">
                    <span className="text-white -1 mx-3">v3xlabs</span>
                </div>
                <div>Empowering open-source</div>
            </div>
            <nav className="flex">
                <ul className="">
                    {[
                        ['.company', 'https://v3x.company'],
                        ['.domains', 'https://v3x.domains'],
                        ['.health', 'https://v3x.health'],
                        ['.store', 'https://v3x.store'],
                        ['.team', 'https://v3x.team'],
                        // ['.chat', 'https://v3x.chat'],
                        ['.vc', 'https://v3x.vc'],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                key={label}
                                href={href}
                                className={[
                                    'hover:text-blue-500 hover:underline',
                                    label == '.company'
                                        ? 'text-blue-500 dark:text-blue-300'
                                        : 'text-notblack dark:text-white',
                                ].join(' ')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
