/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable tailwindcss/no-custom-classname */
import { learningtab, topiclist } from "../../../DummyData/DashboardDummy";
import { LearningHeader } from "../../index";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { learningimage } from "../../../assets";
import Learninglayout from "../Learningtab/Learninglayout";
import { SetStateAction, useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [rating, setRating] = useState(3); // Default rating is 3
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [feedback, setFeedback] = useState(""); // For feedback text

  // Array to create stars
  const stars = [1, 2, 3, 4, 5];

  // Handle feedback change
  const handleFeedbackChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFeedback(e.target.value);
  };

  // Submit handler
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(`Rating: ${rating}, Feedback: ${feedback}`);
  };

  return (
    <>
      <LearningHeader />
      <div className="flex items-center justify-between px-2 md:px-6">
        <div className="w-[50%] py-4 text-[12px] font-semibold md:mx-auto md:w-[86%] md:text-xl">
          {learningtab.coursename}
        </div>

        <div className="flex items-center">
          <div className="text-xl font-semibold">
            <CircularProgressbar
              value={learningtab.progress}
              text={`${learningtab.progress}%`}
              styles={buildStyles({
                rotation: 1,
                strokeLinecap: "butt",
                textSize: "24px",
                pathTransitionDuration: 0.5,
                pathColor: `#6BC049`,
                textColor: "black",
                trailColor: "#f5f5f5",
                backgroundColor: "#000000",
              })}
              className="size-8 md:size-10"
            />
          </div>

          <div className="ml-1 text-[12px]">Your Progress</div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
          <div>
            <div>
              <img
                src={learningimage}
                alt="Course Image"
                className="h-auto w-full"
              />
            </div>

            <div className="md:w-[1040px]">
              <Learninglayout />
            </div>

            <div>
              <div className="my-4 flex justify-center">
                <button
                  className="rounded-lg bg-[#1D2B53] px-4 py-2 text-white shadow-md"
                  onClick={toggleModal}
                >
                  Leave a Review
                </button>
              </div>

              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={toggleModal}
                  ></div>

                  <div className="relative z-10 w-1/3">
                    <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
                      <div className="mb-4 flex">
                        {stars.map((star) => (
                          <span
                            key={star}
                            className={`cursor-pointer text-4xl ${
                              (hoverRating || rating) >= star
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4 grid justify-items-center">
                          <textarea
                            className="max-h-[190px] w-[370px] rounded-md border border-gray-300 p-3"
                            rows={4}
                            placeholder="Can you give us your opinion on the course?"
                            value={feedback}
                            onChange={handleFeedbackChange}
                          ></textarea>
                        </div>
                        <div className="grid justify-items-center">
                          <button
                            type="submit"
                            className="rounded-md bg-[#1D2B53] px-5 py-1 text-white"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden rounded-lg bg-white p-4 shadow md:block">
            <h2 className="mb-4 text-xl font-semibold">Topic List</h2>

            {topiclist.map((data, index) => {
              return (
                <div>
                  <div className="flex" key={index}>
                    <div className="pr-2">
                      <input
                        type="checkbox"
                        className="htmlForm-checkbox text-green-500"
                      />
                    </div>
                    <div>
                      <div className="flex">
                        <div className="pr-1">{data.number}.</div>
                        <div>{data.topic}</div>
                      </div>
                      <div className="flex">
                        <div className="px-2 pt-1">
                          {" "}
                          <img src={data.icon} alt="" />
                        </div>
                        <div>{data.time}</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-1">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
