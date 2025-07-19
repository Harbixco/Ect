import { useState } from "react";
import { filters } from "../../DummyData/CourseData";
import { Component } from "../common";
import H1 from "./H1";

export default function BroadCoursesSelection({
  children,
  CTA_Child,
  showFilter = true,
}: {
  children: React.ReactNode;
  CTA_Child?: React.ReactNode;
  showFilter?: boolean;
}) {
  return (
    <Component>
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <H1 text="broad course selection" />
          {CTA_Child}
        </div>
        <p>
          Choose from over 210,000 online video courses with additional
          published every month.
        </p>
        {showFilter && <Filters />}
      </div>

      <div className="">{children}</div>
    </Component>
  );
}

function Filters() {
  const [pickedIndexes, setPickedIndexes] = useState<number[]>([]);

  const handleSelection = (index: number) => {
    if (pickedIndexes) {
      if (pickedIndexes.includes(index)) {
        setPickedIndexes(pickedIndexes.filter((i) => i !== index));
      } else {
        setPickedIndexes([...pickedIndexes, index]);
      }
    }
  };

  return (
    <div className="mt-6 flex items-center gap-4 overflow-hidden">
      <p className="flex h-8 items-center rounded-lg bg-primary px-2 font-semibold text-white">
        Filter:
      </p>
      <div className="overflow-scroll pr-2 lg:overflow-hidden">
        <ul className="flex w-max justify-between gap-4 overflow-hidden md:gap-8">
          {filters.map((filter, index) => (
            <FilterList
              key={index}
              item={filter}
              index={index}
              handleSelection={handleSelection}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

interface FilterListProps {
  item: string;
  index: number;
  handleSelection: (index: number) => void;
}

function FilterList({ item, handleSelection, index }: FilterListProps) {
  const [picked, setPicked] = useState(false);

  const togglePicked = () => {
    setPicked(!picked);
    handleSelection(index);
  };

  return (
    <li
      onClick={togglePicked}
      className={`flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 capitalize transition-colors duration-150 ease-linear ${picked ? "bg-secondary text-white" : "bg-primary/10"}`}
    >
      {item}
    </li>
  );
}
