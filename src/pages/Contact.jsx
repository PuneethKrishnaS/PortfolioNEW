import { LocateIcon, LocateOffIcon, Mail, PhoneCall } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-5 flex flex-col items-center">
      <div className="flex gap-4 flex-col text-center">
        <h1 className="md:text-5xl text-3xl font-bold">Let's Get in Touch</h1>
        <p className="text-primary/70 md:text-xl text-sm">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="md:grid grid-cols-2 gap-8 md:p-18  px-8 text-nowrap m-8 w-full bg-gradient-to-tr from-neutral-100 border rounded-md to-neutral-50 dark:from-neutral-900 dark:to-neutral-950  md:w-4xl transition-all py-4">
        <form className=" col-span-1 flex flex-col w-full ">
          <div className="flex flex-col my-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id={"name"}
              type="text"
              placeholder="Enter your name"
              className="border p-2 rounded-md focus:outline-1 "
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your name"
              className="border p-2 rounded-md focus:outline-1 "
            />
          </div>
          <div className="flex flex-col my-2 mb-6">
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <textarea
              id={"message"}
              rows={8}
              type="text"
              placeholder="Enter your message"
              className="border p-2 resize-none rounded-md focus:outline-1 "
            />
          </div>
          <Button type={"submit"}> Submit</Button>
        </form>
        <div className="col-span-1 flex flex-col w-full">
          <h1 className="text-2xl font-bold mb-6 mt-8 md:mt-2">Contact me Me</h1>
          <div>
            <div className="flex gap-6 mt-4 mb-12">
              <div className="rounded-full border p-3">
                <Mail />
              </div>
              <div>
                <h6 className="text-lg font-semibold ">Email to me at</h6>
                <p>puneeth.krishna2026@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6 my-12">
              <div className="rounded-full border p-3">
                <PhoneCall />
              </div>
              <div>
                <h6 className="text-lg font-semibold ">Call me at</h6>
                <p>+91 7483262382</p>
              </div>
            </div>
            <div className="flex gap-6 my-12">
              <div className="rounded-full border p-3">
                <LocateIcon />
              </div>
              <div>
                <h6 className="text-lg font-semibold ">Location at</h6>
                <p>Davangere, Karnataka 577006</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
