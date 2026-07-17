import { FaBrandsRust, FaBrandsDocker, FaSolidGlobe } from 'solid-icons/fa';
import { FiGithub } from 'solid-icons/fi';
import { SiNpm } from 'solid-icons/si';

const projectModules = import.meta.glob('../../../content/projects/*.json', { eager: true }) as Record<string, { default: Project }>;
type Project = {
  order: number;
  name: string;
  description: string;
  link: string;
  source?: string;
  registry?: string;
  iconLight?: string;
  iconDark?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  darkHoverColor?: string;
  darkHoverTextColor?: string;
  language?: string;
  type: string;
};
const projects = Object.values(projectModules).map(mod => mod.default).sort((a, b) => a.order - b.order);

const language_to_color: Record<string, string> = {
    rust: '#dea584',
    typescript: '#2b7489',
};

const language_to_label: Record<string, string> = {
    rust: 'Rust',
    typescript: 'TypeScript',
};

const isGithubUrl = (url: string) => url.startsWith('https://github.com/');

export const Projects = () => {
    return (
        <section aria-label="Projects" class="lg:col-span-12">
            <div class="grid grid-cols-1 gap-px bg-neutral-300 dark:bg-neutral-700 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {projects.map((entry) => (
                <article
                    class="project-card group min-h-52 border-0 bg-white transition-colors duration-75 dark:bg-[#181818]"
                    style={{
                        "--project-hover-color": entry.hoverColor ?? "#e5e5e5",
                        "--project-hover-text-color": entry.hoverTextColor ?? "#131313",
                        "--project-dark-hover-color": entry.darkHoverColor ?? "#303030",
                        "--project-dark-hover-text-color": entry.darkHoverTextColor ?? "#ffffff",
                    }}
                >
                    <div class="flex h-full flex-col p-5">
                        <a
                            href={entry.link}
                            target="_blank"
                            rel="noreferrer"
                            class="flex w-fit items-center gap-2 text-base font-bold underline decoration-neutral-300 decoration-2 underline-offset-4 transition-colors hover:decoration-notblack dark:decoration-neutral-700"
                        >
                            {entry.iconLight && (
                                <>
                                    <img src={entry.iconLight} alt="" class={`h-5 w-5 shrink-0 ${entry.iconDark ? 'dark:hidden' : ''}`} />
                                    {entry.iconDark && <img src={entry.iconDark} alt="" class="hidden h-5 w-5 shrink-0 dark:block" />}
                                </>
                            )}
                            {entry.name}
                        </a>
                        <p class="project-description mt-3 grow text-sm leading-6 text-neutral-600 dark:text-neutral-300">{entry.description}</p>
                        <div class="project-metadata mt-5 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                            {entry.language && <span
                                class="h-2.5 w-2.5 rounded-full"
                                style={{ 'background-color': language_to_color[entry.language] }}
                                aria-label={language_to_label[entry.language]}
                                title={language_to_label[entry.language]}
                            />}
                            {entry.type === 'container' && (
                                <div class="text-[#2496ed]" aria-label="Container" title="Container">
                                    <FaBrandsDocker />
                                </div>
                            )}
                            <div class="ml-auto flex items-center gap-1">
                                {entry.registry && (
                                    <a
                                        href={entry.registry}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="project-action group-hover:border-neutral-300 dark:group-hover:border-neutral-600"
                                        aria-label={`View ${entry.name} package`}
                                        title="Package"
                                    >
                                        {entry.type === 'crate'
                                            ? <FaBrandsRust class="text-[#dea584]" />
                                            : <SiNpm class="text-[#cb3837]" />}
                                    </a>
                                )}
                                {(entry.source || isGithubUrl(entry.link)) && (
                                    <a
                                        href={entry.source ?? entry.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="project-action group-hover:border-neutral-300 dark:group-hover:border-neutral-600"
                                        aria-label={`View ${entry.name} source on GitHub`}
                                        title="GitHub"
                                    >
                                        <FiGithub />
                                    </a>
                                )}
                                {(entry.source || !isGithubUrl(entry.link)) && (
                                    <a
                                        href={entry.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="project-action group-hover:border-neutral-300 dark:group-hover:border-neutral-600"
                                        aria-label={`Visit ${entry.name} website`}
                                        title="Website"
                                    >
                                        <FaSolidGlobe class="text-[#2b6cb0]" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            ))}
            </div>
        </section>
    );
};
