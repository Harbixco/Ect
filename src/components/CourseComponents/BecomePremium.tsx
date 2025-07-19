import { Button, Component } from "../common";

export default function BecomePremium() {
  return (
    <Component>
      <div className="flex flex-col-reverse items-center justify-between gap-4 border p-4 md:flex-row md:p-8">
        <div className="flex flex-col items-start gap-4  text-primary">
          <p className="text-sm uppercase tracking-widest">expansion premium</p>
          <h1 className=" text-2xl font-bold leading-tight md:text-[40px]">
            Become a Premium Student
          </h1>
          <ul className="*:list-inside *:list-disc *:md:text-lg">
            <li>Get access to all courses for one yer</li>
            <li>International course collection in 14 languages</li>
            <li>Top certification in tech and business</li>
          </ul>
          <Button
            type="link"
            href="/course/premium"
            text="Become Premium"
            category="primary"
          />
        </div>
        <div className="h-80 overflow-hidden md:h-[400px] md:w-2/3 md:rounded-lg">
          <img
            className="size-full object-cover"
            src="/images/premium-image.png"
            alt="image of a person carrying a load of books"
          />
        </div>
      </div>
    </Component>
  );
}
