const contributors_a = [
    'lucemans',
    'svemat01',
    'antony1060',
    'harryet',
    'jontes-tech',
    'robiot',
    'prokopschield',
    'creedscode',
    'm1guelpf',
    'anaarsonist',
    'hattorius',
    'thejoshuahendrix',
    'ItzDerock',
    'visenp',
    'imvlan',
    'loidnoir',
    'TG-Techie',
    'M-Desormeaux',
    'chalkedgoose',
    '0xEquinox',
    'KristofKekesi',
    'milkedcow',
    'joelimgu',
    'oguzeray',
];

export const RecentContributors = () => {
    return (
        <div className="lborder w-full p-4 rounded-md space-y-2">
            <h2>Recent Contributors</h2>
            <ul className="flex gap-1 flex-wrap">
                {contributors_a.map((contributor) => (
                    <li key={contributor}>
                        <a
                            href={`https://github.com/${contributor}`}
                            target="_blank"
                        >
                            <img
                                src={`https://github.com/${contributor}.png`}
                                className="w-7 h-7 aspect-square rounded-full"
                                alt={contributor}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
