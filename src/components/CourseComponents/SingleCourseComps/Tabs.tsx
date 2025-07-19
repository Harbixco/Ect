import { ChevronDown, Dot } from "lucide-react";
import { outlines } from "../../../DummyData/CourseData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TabsHolder() {
  const [openTabIndex, setOpenTabIndex] = useState<number | null>(null);

  const handleTabOpening = (index: number) => {
    setOpenTabIndex(openTabIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      <article className="flex h-auto w-full flex-col gap-2">
        {outlines.map(
          (
            { title, description }: { title: string; description: string },
            index: number,
          ) => (
            <Tab
              key={index}
              content={title}
              description={description}
              tabIndex={index}
              openTabIndex={openTabIndex}
              setIndex={() => handleTabOpening(index)}
            />
          ),
        )}
      </article>
    </AnimatePresence>
  );
}

interface TabProps {
  content: string;
  description: string;
  openTabIndex: number | null;
  tabIndex: number;
  setIndex: () => void;
}

function Tab({
  content,
  description,
  openTabIndex,
  setIndex,
  tabIndex,
}: TabProps) {
  const isOpen = openTabIndex === tabIndex;

  return (
    <div className="relative w-full cursor-pointer" onClick={setIndex}>
      <div className="relative z-10 flex h-6 items-center justify-between gap-4 rounded-lg border bg-white px-4 py-6">
        <span className="flex items-center gap-4">
          <Dot />
          <p className="font-medium">{content}</p>
        </span>
        <ChevronDown
          size={18}
          className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300 ease-linear`}
        />
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className=" h-auto -translate-y-3 rounded-lg rounded-t-none border p-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
