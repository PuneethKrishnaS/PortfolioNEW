import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useMemo } from "react";
import ProfilePic from "../assets/ProfilePic.webp";
import ResumePDF from "../assets/PuneethKrishna_S_Rakunde_Resume.pdf";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const taglines = useMemo(
    () => [
      "Turning ideas into interactive reality.",
      "Code. Create. Innovate.",
      "Engineering the future, one line at a time.",
      "Where creativity meets functionality.",
      "Solving problems with logic and design.",
    ],
    []
  );

  const [index, setIndex] = useState(0); // Tagline index
  const [text, setText] = useState(""); // Displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting
  const [speed, setSpeed] = useState(100); // Typing speed

  useEffect(() => {
    const current = taglines[index];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setText((prev) => current.slice(0, prev.length + 1));
        setSpeed(100);
      }

      // When finished typing
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When finished deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % taglines.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, speed, taglines]);

  const navigate= useNavigate();

  const handleDownload = () => {
    const pdfUrl = ResumePDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "PuneethKrishna_S_Rakunde_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch px-5 py-20 ">
      {/* image  */}
      <div className=" w-full flex justify-center items-center mb-8 lg:mb-0 flex-col ">
        <img
          src={ProfilePic}
          className="max-h-[80vh] w-auto object-contain"
          alt="Portfolio user"
        />
      </div>

      {/* info  */}
      <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 pb-16">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-wrap">
            Puneeth Krishna S Rakunde
          </h1>
          <h3 className="text-2xl lg:text-3xl font-medium text-wrap">
            Full stack developer
          </h3>
        </div>
        <p className="text-xl text-center text-neutral-600 dark:text-neutral-300 font-medium ">
          {text}
          <span className="animate-pulse text-black">|</span>
        </p>
        <p className="max-w-xl text-gray-600 font-medium dark:text-gray-300 text-center text-base lg:text-lg ">
          Passionate about crafting scalable full-stack solutions and building
          clean, intuitive user experiences. I love working with modern web
          technologies like React, Node.js, and Tailwind CSS.
        </p>

        <div className="gap-4 flex flex-wrap justify-center">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={()=>handleDownload()}>Download Resume</Button>
              </TooltipTrigger>
              <TooltipContent className="py-3">
                <div className="space-y-2">
                  <img
                    className="w-full rounded"
                    src="src/assets/resume_pick.png"
                    width={382}
                    height={216}
                    alt="Content image"
                  />
                  <div className="space-y-1">
                    <p className="text-[13px] font-medium">
                      My Resume
                    </p>
                    <p className="text-xs text-muted-foreground">
                      You can download my resume to check it personaly
                    </p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>{" "}
          <Button variant="outline" onClick={()=>navigate("/projects")}>View Projects</Button>
        </div>
      </div>
    </div>
  );
}
