import { FaBrandsRust, FaBrandsDocker, FaSolidGlobe } from 'solid-icons/fa';
import { SiNpm } from 'solid-icons/si';

const projectModules = import.meta.glob('../../../content/projects/*.json', { eager: true }) as Record<string, { default: Project }>;
type Project = {
  order: number;
  name: string;
  description: string;
  link: string;
  source?: string;
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

export const Projects = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((entry) => (
                <div class="w-full lborder rounded-md prose">
                    <div class="p-4 flex flex-col h-full">
                        <a
                            href={entry.link}
                            target="_blank"
                            class="link font-bold block mb-1"
                        >
                            {entry.name}
                        </a>
                        <p class="grow">{entry.description}</p>
                        <div class="flex items-center mt-2 gap-2 text-xs text-neutral-500">
                            {entry.language && (
                                <div class="flex items-center gap-1">
                                    <div
                                        class="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor:
                                                language_to_color[
                                                    entry.language
                                                ],
                                        }}
                                    ></div>
                                    <span>
                                        {language_to_label[entry.language]}
                                    </span>
                                </div>
                            )}
                            {entry.type === 'package' && (
                                <div class="text-red-700 flex gap-1 items-center">
                                    <SiNpm />
                                    <span>Package</span>
                                </div>
                            )}
                            {entry.type === 'crate' && (
                                <div class="text-orange-500 flex gap-1 items-center">
                                    <FaBrandsRust />
                                    <span>Crate</span>
                                </div>
                            )}
                            {entry.type === 'container' && (
                                <div class="text-blue-500 flex gap-1 items-center">
                                    <FaBrandsDocker />
                                    <span>Container</span>
                                </div>
                            )}
                            {entry.type === 'web' && (
                                <div class="text-cyan-800 flex gap-1 items-center">
                                    <FaSolidGlobe />
                                    <span>Web</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
