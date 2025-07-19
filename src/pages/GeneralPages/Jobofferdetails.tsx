import { jobimg, jobimg2 } from "../../assets";
import { Button } from "../../components/common";
import { useNavigate } from "react-router-dom";
import SimilarjobCard from "../../components/GeneralComponents/SimilarjobCard";
import { similarjoboffer } from "../../DummyData/GenDummy";

const Jobofferdetails = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("joboffer");
  };

  return (
    <div className="w-full pb-[4rem] pt-[2rem]">
      <div className="m-auto w-[88%] ">
        <div className="flex justify-between">
          <div className="md:text-md flex items-center gap-2 rounded-full bg-secondary px-2 py-2 text-sm md:gap-6 md:px-4 ">
            <p className=" rounded-full px-2">Fontend Developer</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Frontend Developer
          </h1>
          <p className=" ">
            Join our dynamic team! We're seeking a skilled frontend <br />{" "}
            developer to create engaging user interfaces. Apply now and <br />{" "}
            unleash your creativity in a collaborative environment.
          </p>
        </div>
        <div className="mt-4 items-center">
          <img src={jobimg2} alt="" />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-sm">Published on </p>
            </div>
            <button className="border-gray border text-xs text-[#6BC04A]  ">
              Copy link
            </button>
          </div>
          <h2 className="text-sm text-[#6BC04A]">24 Apr 2024</h2>
        </div>

        <div className="mt-8 flex flex-col gap-4 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum
            justo massa. Eu dolor aliquet risus gravida nunc at feugiat
            consequat purus. Non massa enim vitae duis mattis. Vel in ultricies
            vel fringilla.
          </p>

          <hr className="" />

          <img src={jobimg} alt="" />
        </div>
        {/* skills required */}

        <div className="flex flex-col gap-4">
          <h1 className=" font-semi-bold mt-6 text-2xl text-[#6BC04A]">
            Skills
          </h1>
          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
          <ol className="">
            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
            <li>
              Eu turpis posuere semper feugiat volutpat elit, ultrices
              suspendisse. Auctor vel in vitae placerat
            </li>
            <li>
              Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </li>
          </ol>
          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
        </div>

        {/* Requirement */}

        <div className="flex flex-col gap-4">
          <h1 className=" font-semi-bold mt-6 text-2xl text-[#6BC04A]">
            Requirement
          </h1>
          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>

          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
          <p className="">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
        </div>

        <div className="font-semi-bold mt-8 flex items-center justify-between text-sm text-[#6BC04A]">
          <p>Job offers</p>
          <Button
            type="function"
            text="view all job offers"
            category="primary"
            onClick={clickHandler}
          />
        </div>

        {/* similar jobs */}

        <div className="mt-8 flex flex-col gap-4 ">
          <h1 className="text-2xl font-bold md:text-3xl">Similar job offers</h1>
          <p className="">
            Tool and strategies modern teams need to help their companies grow.
          </p>
          <div className="mx-auto  w-full items-center md:flex ">
            {similarjoboffer.map((data) => (
              <div className="mx-auto w-full " key={data.id}>
                <SimilarjobCard {...data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobofferdetails;
