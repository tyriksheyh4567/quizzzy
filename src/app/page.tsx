import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-20 px-4 min-h-[70vh]">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            width={160}
            height={160}
            className="rounded-full border-4 border-blue-500 shadow-lg object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Hi, I'm [Your Name]
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
            I build modern, responsive, and user-friendly web applications with a focus on performance and great user experience. Explore my skills, projects, and feel free to get in touch!
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-2 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
