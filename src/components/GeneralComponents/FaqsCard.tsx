import { useState } from "react";
import { frequestquestion } from "../../DummyData/GenDummy";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqsCard = () => {
  
  const [expandedId, setExpandedId] = useState(null);

  
  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="m-auto w-[88%] my-6">
        <h2 className="md:text-2xl text-xl text-[#6BC04A] font-semibold">Frequently Asked Questions</h2>
        {frequestquestion.map((data) => (
          <div key={data.id} className="mt-6 border border-black  rounded-lg">
            <div
              className="flex justify-between items-center px-4 py-2 cursor-pointer"
              onClick={() => toggleAnswer(data.id)}
            >
              <p>{data.question}</p>
              {expandedId === data.id ? <ChevronUp /> : <ChevronDown />}
            </div>
            
            {expandedId === data.id && (
              <div className="px-4 py-6 bg-gray-100">
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
