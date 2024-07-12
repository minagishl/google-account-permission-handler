export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col space-y-3 px-3">
      {children}
    </main>
  );
}
