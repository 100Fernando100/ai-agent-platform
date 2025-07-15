// app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Welcome to the AI Agent Platform 👋</h1>
      <p className="mt-4 text-gray-600">Start configuring your agents using the Settings panel.</p>

      <div className="mt-6">
        <Link
          href="/settings"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go to Settings
        </Link>
      </div>
    </main>
  );
}
