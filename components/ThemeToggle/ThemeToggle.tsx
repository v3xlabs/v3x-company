import { FiMoon, FiSun } from "solid-icons/fi";
import { createSignal, onMount, Show } from "solid-js";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = createSignal(false);

    const applyTheme = (shouldUseDarkTheme: boolean) => {
        document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
        document.documentElement.classList.toggle("light", !shouldUseDarkTheme);
        setIsDark(shouldUseDarkTheme);
    };

    onMount(() => {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    const toggleTheme = () => {
        const shouldUseDarkTheme = !isDark();
        applyTheme(shouldUseDarkTheme);
    };

    return (
        <button
            type="button"
            class="theme-toggle"
            aria-label="Toggle color theme"
            aria-pressed={isDark()}
            onClick={toggleTheme}
        >
            <Show when={isDark()} fallback={<FiMoon />}>
                <FiSun />
            </Show>
        </button>
    );
};
