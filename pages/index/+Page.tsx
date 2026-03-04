import { RecentContributors } from "../../components/sections/contributors/RecentContributors.js";
import { ChatDiscord } from "../../components/sections/discord/ChatDiscord.js";
import { Projects } from "../../components/sections/projects/Projects.js";
import { README } from "../../components/sections/readme/README.js";

export default function Page() {
  return (
    <>
      <div class="mx-auto flex flex-col gap-4 items-center justify-center px-4 md:px-8 pt-8">
        <div class="w-full h-full max-w-4xl space-y-4 font-sans">
          <div class="lborder rounded-md prose">
            <div class="px-6 py-3 flex gap-2">
              <h1>V3X Labs</h1>
              <span class="text-neutral-400">
                - Empowering open-source
              </span>
            </div>
          </div>

          <README />

          <div class="grid w-full gap-4 grid-cols-1 md:grid-cols-2">
            <RecentContributors />
            <ChatDiscord />
          </div>

          <Projects />
        </div>
      </div>
    </>
  );
}
