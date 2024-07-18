const fetchContributors = async () => {
    const response = await fetch("https://raw.githubusercontent.com/v3xlabs/v3x-data/master/team/contributors.json");
    const contributors = await response.json();
    return contributors as {contributors: string[]};
}

export const RecentContributors = async () => {

    const contributors = await fetchContributors();

    return (
        <div className="lborder w-full p-4 rounded-md space-y-2">
            <h2>Recent Contributors</h2>
            <ul className="flex gap-1 flex-wrap">
                {contributors.contributors.map((contributor) => (
                    <li key={contributor}>
                        <a
                            href={`https://github.com/${contributor}`}
                            target="_blank"
                            title={contributor}
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
