import { Share2 } from "lucide-react";
import {
  portdeatailsimg,
  portdetails2,
  portdetails3,
  portdetails4,
} from "../../assets";

const PortfolioDetails = () => {
  return (
    <div className="w-full pb-6 pt-[30px]">
      <div className="mx-auto w-[93%] ">
        <div>
          <h4 className="w-fit items-center  rounded-2xl bg-[#6BC04A] px-3 py-1">
            web development
          </h4>
        </div>
        <div className="my-5 w-full">
          <h3 className="mt-8 text-xl font-bold text-primary md:w-1/3 md:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          </h3>
          <p className="my-3 w-full text-sm md:w-1/2 md:text-base">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div>
          <img src={portdeatailsimg} alt="" className="w-full" />
        </div>
        <div className="my-10 flex justify-between gap-5">
          <img src={portdetails2} alt="" className="w-full"/>
          <img src={portdetails3} alt="" className="w-full"/>
          <img src={portdetails4} alt="" className="w-full"/>
        </div>
        <div className="flex justify-between">
          <div className="flex w-fit items-center gap-x-2 rounded-lg border border-[#dadada] px-2 py-1 font-semibold text-[#6BC04A]">
            <Share2 size={15} />
            <p className="">share</p>
          </div>
          <div className="w-fit items-center gap-x-2 rounded-lg border border-[#dadada] px-2 py-1 font-semibold text-[#6BC04A]">
            <p>copy link</p>
          </div>
        </div>
        <div className="my-8">
          <h3 className="my-4 text-xl font-semibold text-[#6BC04A] md:text-2xl">
            How it Works
          </h3>
          <p className="text-sm md:text-base">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
            Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
            gravida nunc at feugiat consequat purus. Non massa enim vitae duis
            mattis. Vel in ultricies vel fringilla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
            Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
            gravida nunc at feugiat consequat purus. Non massa enim vitae duis
            mattis. Vel in ultricies vel fringilla.
          </p>
          <p className="my-4 text-sm md:text-base">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
            Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
            gravida nunc at feugiat consequat purus. Non massa enim vitae duis
            mattis. Vel in ultricies vel fringilla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
            Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
            gravida nunc at feugiat consequat purus. Non massa enim vitae duis
            mattis. Vel in ultricies vel fringilla.
          </p>
        </div>
        <div className="my-8 ">
          <h3 className="my-4 text-xl font-semibold text-[#6BC04A] md:text-2xl">
            What You'll Get:
          </h3>
          <p className="my-3 text-sm md:text-base ">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
          <ol className="ml-5 list-decimal md:ml-8">
            <li className="text-sm md:text-base">
              Lectus id duis vitae porttitor enim gravida morbi
            </li>
            <li className="text-sm md:text-base">
              Eu turpis posuere semper feugiat volutpat elit, ultrices
              suspendisse. Auctor vel in vitae placerat.
            </li>
            <li className="text-sm md:text-base">
              Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </li>
          </ol>
          <p className="my-3 text-sm md:text-base ">
            Lectus leo massa amet posuere. Malesuada mattis non convallis
            quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum
            in non. Pretium ultricies tempor non est diam. Enim ut enim amet
            amet integer cursus. Sit ac commodo pretium sed etiam turpis
            suspendisse at.
          </p>
          <p className="my-3 text-sm md:text-base ">
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris
            vestibulum.
          </p>
        </div>

        <div className="my-8">
          <h3 className="my-4 text-xl font-semibold text-[#6BC04A] md:text-2xl">
            Why Choose Me?
          </h3>
          <p className="text-sm md:text-base">
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
          <p className="my-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa
          </p>
          <p>
            enim vitae duis mattis. Vel in ultricies vel fringilla. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec ullamcorper
            mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor
            aliquet risus gravida nunc at feugiat consequat purus. Non massa
            enim vitae duis mattis. Vel in ultricies vel fringilla.
          </p>
          <p className="my-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa
          </p>
        </div>

        <div className="my-8">
          <h3 className="my-4 text-xl font-semibold text-[#6BC04A] md:text-2xl">
            Stack Used
          </h3>
          <p className="text-sm md:text-base">
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
          </p>
        </div>

        <div className="my-10 flex justify-between gap-5">
          <img src={portdetails2} alt=""  className="w-full"/>
          <img src={portdetails3} alt="" className="w-full" />
          <img src={portdetails4} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
