import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "../components/Logo";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-background z-50 ">
      <div className="container mx-auto px-5">
        <nav className="flex relative justify-between items-center">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Icons */}
          <div className="flex gap-6 items-center">
            <ModeToggle />

            <a
              href="https://github.com/PuneethKrishnaS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} className="hover:text-primary transition-colors " />
            </a>

            <a
              href="mailto:puneeth.krishna2026@gmail.com"
              aria-label="Email"
            >
              <Mail size={24} className="hover:text-primary transition-colors " />
            </a>

            <a
              href="https://linkedin.com/in/puneethkrishna-sr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              
              <Linkedin size={24} className="hover:text-primary transition-colors " />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

