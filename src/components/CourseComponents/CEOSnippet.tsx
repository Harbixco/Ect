import { Quote } from "lucide-react";
import { Button, Component } from "../common";

export default function CEOSnippet() {
  return (
    <section className="bg-[#E8EAEE]">
      <Component>
        <div className="mx-auto flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:p-8 ">
          <div className="relative flex size-full flex-col justify-between gap-10 md:w-1/2">
            <Quote
              size={250}
              className="absolute right-0 opacity-5 md:-right-10 md:-top-20"
            />
            <p className="text-primary">
              At ExpansionCyberTech, we're committed to empowering organizations
              with the tools they need to thrive in the digital age. Together,
              let's unlock your workforce's potential and propel your
              organization to new heights of success.
              <br />
              Join us on this journey of innovation and growth.
            </p>

            <Button
              className="w-max"
              type="link"
              href="/about"
              text="read about us"
              category="primary"
            />
          </div>
          <div className="relative h-80 w-full md:size-80">
            <img
              src="/images/ceo.jpg"
              alt=""
              className="size-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-white py-2">
              <h1 className="mr-2 text-lg font-bold capitalize">
                jim hemgen -
              </h1>
              <p>CEO</p>
            </span>
          </div>
        </div>
      </Component>
    </section>
  );
}
