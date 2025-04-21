export default function Projects() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Project One</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A brief description of Project One, highlighting its features and technologies used.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Project Two</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A brief description of Project Two, highlighting its features and technologies used.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}