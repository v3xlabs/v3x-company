import { Link } from '@tanstack/solid-router'

export default function Header() {
  return (
    <header class="site-header px-4">
      <nav class="mx-auto flex w-full max-w-6xl items-start justify-between border-b-2 border-notblack pb-5 dark:border-white md:max-w-[111rem]">
        <h2 class="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link to="/" class="flex items-center gap-2 bg-notblack px-3 py-1 text-white dark:bg-white dark:text-notblack">
            TanStack Start
          </Link>
        </h2>

        <div class="ml-auto flex items-center gap-2"></div>

        <div class="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
          <Link
            to="/"
            class="text-neutral-500 transition-colors hover:text-notblack dark:text-neutral-400 dark:hover:text-white"
            activeProps={{ class: 'text-notblack dark:text-white' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            class="text-neutral-500 transition-colors hover:text-notblack dark:text-neutral-400 dark:hover:text-white"
            activeProps={{ class: 'text-notblack dark:text-white' }}
          >
            About
          </Link>
          <a
            href="https://tanstack.com/start/latest/docs/framework/solid/overview"
            target="_blank"
            rel="noreferrer"
            class="text-neutral-500 transition-colors hover:text-notblack dark:text-neutral-400 dark:hover:text-white"
          >
            Docs
          </a>
        </div>
      </nav>
    </header>
  )
}
