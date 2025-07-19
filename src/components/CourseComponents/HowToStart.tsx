import { howToStart } from "../../DummyData/CourseData";
import { Component } from "../common";
import H1 from "./H1";

export default function HowToStart() {
  return (
    <Component>
      <H1 text="How to get started" />

      <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-8 bg-primary p-8">
        {howToStart.map((process) => (
          <div
            key={process.step}
            className="flex flex-col items-center gap-2 border border-white p-4 text-center *:text-white md:flex-1"
          >
            <h1 className="text-5xl font-bold">{process.step}</h1>
            <h3 className="my-2 text-lg font-semibold capitalize">
              {process.title}
            </h3>
            <p>{process.details}</p>
          </div>
        ))}
      </div>
    </Component>
  );
}
