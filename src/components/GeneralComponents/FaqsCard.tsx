import { useState } from "react";
import { frequestquestion } from "../../DummyData/GenDummy";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqsCard = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="m-auto my-6 w-[88%]">
        <h2 className="text-xl font-semibold text-[#6BC04A] md:text-2xl">
          Frequently Asked Questions
        </h2>
        {frequestquestion.map((data) => (
          <div key={data.id} className="mt-6 rounded-lg border  border-black">
            <div
              className="flex cursor-pointer items-center justify-between px-4 py-2"
              onClick={() => toggleAnswer(data.id)}
            >
              <p>{data.question}</p>
              {expandedId === data.id ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedId === data.id && (
              <div className="bg-gray-100 px-4 py-6">
                <p>{data.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsCard;
