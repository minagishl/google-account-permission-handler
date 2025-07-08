import type { JSX } from 'solid-js'

export default function Container({ children }: { children: JSX.Element }) {
  return (
    <main class="flex h-screen w-screen flex-col items-center justify-center space-y-3 px-4 dark:bg-neutral-900">
      {children}
    </main>
  );
}
