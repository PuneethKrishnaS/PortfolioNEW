import { Code, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="">
      <div className="min-h-screen px-5 py-16 flex flex-col items-center justify-start text-center">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">About Me</h1>

        <p className="w-full text-lg lg:text-xl text-neutral-600 dark:text-gray-400 text-justify  font-medium leading-relaxed">
          Hello! I'm{" "}
          <span className="font-bold text-foreground">
            Puneeth Krishna S Rakunde
          </span>
          , a passionate full-stack developer who loves building elegant,
          efficient, and scalable solutions for the web. My journey in
          development began with curiosity and turned into a profession I truly
          enjoy.
          <br />
          <br />
          I'm experienced in working across the full web stack – from crafting
          responsive front-ends using{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span> to building robust
          backends with <span className="font-semibold">Node.js</span> and{" "}
          <span className="font-semibold">Express</span>. I'm also well-versed
          in deploying apps using cloud platforms and version control systems
          like Git.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Skills */}
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Skills</h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1 text-left">
              <li>React & Next.js</li>
              <li>Tailwind CSS, Sass</li>
              <li>Node.js, Express, REST APIs</li>
              <li>MongoDB, SQL</li>
              <li>TypeScript, JavaScript</li>
              <li>Git, GitHub, CI/CD</li>
            </ul>
          </div>

          {/* What I Love */}
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">What I Love</h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1 text-left">
              <li>Writing clean, elegant code</li>
              <li>Solving real-world problems</li>
              <li>Designing intuitive UI/UX</li>
              <li>Learning new tools & frameworks</li>
              <li>Open source collaboration</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-gray-500 text-sm"></div>
      </div>
    </div>
  );
}
