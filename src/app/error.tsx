"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex justify-center items-center flex-col h-screen gap-10">
      <h2>Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="bg-red-600 rounded-full font-medium text-lg text-white px-8 py-2.5"
      >
        Try again
      </button>
    </main>
  );
}
