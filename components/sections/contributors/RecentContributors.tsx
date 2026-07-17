import { useData } from "vike-solid/useData";
import { For } from "solid-js";
import { Data } from "../../../pages/index/+data";

export const RecentContributors = () => {
    const { contributors } = useData<Data>();

    return (
        <section class="compact-panel" aria-labelledby="contributors-title">
            <h2 id="contributors-title">Recent contributors</h2>
            <ul class="mt-3 flex flex-wrap gap-1.5">
                <For each={contributors}>{(contributor) => (
                    <li>
                        <a
                            href={`https://github.com/${contributor}`}
                            target="_blank"
                            rel="noreferrer"
                            title={contributor}
                            class="block transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
                        >
                            <img
                                src={`https://github.com/${contributor}.png`}
                                class="w-7 h-7 aspect-square rounded-full"
                                alt={contributor}
                            />
                        </a>
                    </li>
                )}</For>
            </ul>
        </section>
    );
};
