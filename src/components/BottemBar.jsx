import { Contact, Home, Star, User, WorkflowIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottemBar() {
  const links = [
    { name: "Home", to: "/", icon: Home, color: "black" },
    { name: "About Me", to: "/about", icon: User },
    { name: "Projects", to: "/projects", icon: WorkflowIcon },
    { name: "Achivements", to: "/achivements", icon: Star },
    { name: "Contact", to: "/contact", icon: Contact },
  ];

  return (
    <footer className="py-5 fixed bottom-0 left-0 w-full bg-background ">
      <div className="container mx-auto px-5">
        <div className="flex gap-4 md:gap-8 justify-center items-center ">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex gap-2 ${isActive ? "font-bold " : "font-normal"}`
              }
            >
              {({ isActive }) => (
                <div className="flex flex-col justify-center items-center dark:text-gray-300 transition-all duration-200 ">
                  <link.icon className={`${isActive ? "dark:text-neutral-50 text-black " : "text-neutral-500"}`} />
                  {link.name}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

