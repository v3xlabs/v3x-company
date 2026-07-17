import { RecentContributors } from "../../components/sections/contributors/RecentContributors.js";
import { ChatDiscord } from "../../components/sections/discord/ChatDiscord.js";
import { Projects } from "../../components/sections/projects/Projects.js";
import { README } from "../../components/sections/readme/README.js";

export default function Page() {
  return (
    <div class="mx-auto w-full max-w-6xl px-4 pb-4 pt-4 md:max-w-[111rem] sm:px-6">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <README />

        <div class="grid gap-4 lg:col-span-4">
          <RecentContributors />
          <ChatDiscord />
        </div>

        <Projects />
      </div>
    </div>
  );
}
