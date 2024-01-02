import { RecentContributors } from '../components/sections/contributors/RecentContributors';
import { ChatDiscord } from '../components/sections/discord/ChatDiscord';
import { Projects } from '../components/sections/projects/Projects';
import { README } from '../components/sections/readme/README';

export default function App() {
    return (
        <div className="mx-auto flex flex-col gap-4 items-center justify-center px-4 md:px-8 pt-8">
            <div className="w-full h-full max-w-4xl space-y-4 font-sans">
                <div className="lborder rounded-md prose">
                    <div className="px-6 py-3 flex gap-2">
                        <h1>V3X Labs</h1>
                        <span className="text-neutral-400">
                            - Empowering open-source
                        </span>
                    </div>
                </div>

                <README />

                <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2">
                    <RecentContributors />
                    <ChatDiscord />
                </div>

                <Projects />
            </div>
        </div>
    );
}
