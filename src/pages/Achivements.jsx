import { Trophy, Star, Award } from "lucide-react"; // or any icon lib

const achievements = [
  {
    title: "Completed Full-Stack Developer Bootcamp",
    description: "Successfully completed an intensive 6-month bootcamp covering MERN stack, REST APIs, and deployment.",
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    link: "https://certificate-link.com"
  },
  {
    title: "Top Performer - Web Dev Hackathon 2024",
    description: "Secured 1st place among 300+ participants by building a full-stack solution in 24 hours.",
    icon: <Trophy className="w-6 h-6 text-orange-500" />,
    link: ""
  },
  {
    title: "100+ GitHub Contributions in a Month",
    description: "Maintained consistency in open source contributions including bug fixes and UI improvements.",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    link: "https://github.com/yourgithub"
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen py-16 px-5 flex flex-col items-center">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center">Achievements</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        A few accomplishments and recognitions that I'm proud of.
      </p>

      <div className="w-full max-w-4xl space-y-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex gap-4 items-start shadow-sm"
          >
            <div>{item.icon}</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
