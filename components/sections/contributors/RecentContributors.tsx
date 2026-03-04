import { useData } from "vike-solid/useData";
import { Data } from "../../../pages/index/+data";

export const RecentContributors = () => {
    const { contributors } = useData<Data>();

    return (
        <div class="lborder w-full p-4 rounded-md space-y-2">
            <h2>Recent Contributors</h2>
            <ul class="flex gap-1 flex-wrap">
                {contributors.map((contributor) => (
                    <li key={contributor}>
                        <a
                            href={`https://github.com/${contributor}`}
                            target="_blank"
                            title={contributor}
                        >
                            <img
                                src={`https://github.com/${contributor}.png`}
                                class="w-7 h-7 aspect-square rounded-full"
                                alt={contributor}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
