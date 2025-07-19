import { Button, Component } from "../../components/common";
import { benefitFeatures } from "../../DummyData/CourseData";
import { Gem, SquareCheckBig } from "lucide-react";

export default function Premium() {
  return (
    <main>
      <>
        <Proposed />
        <Advert />
      </>
    </main>
  );
}

// --------------------PROPOSED
function Proposed() {
  return (
    <Component>
      <section className="mx-auto">
        <div className="mx-auto mb-8 flex w-full flex-col items-center gap-6 md:mb-12 md:w-4/5 *:md:text-center">
          <h1 className="text-2xl font-bold capitalize md:text-3xl lg:text-4xl">
            The perfect and <span className="text-secondary">affordable</span>{" "}
            plan to highly boost your career success
          </h1>

          <p className="">
            We've got the necessary ingredients to take you to a highly
            productive level. These plans are pocket-friendly and perfect to
            take along our courses!
          </p>
        </div>

        <div className="flex h-max flex-col gap-4 md:flex-row">
          <div
            className="relative h-96 overflow-hidden rounded-lg border bg-cover bg-top md:h-[unset] md:w-5/12 lg:w-2/6"
            style={{
              backgroundImage: "url(/images/student.jpg)",
            }}
          >
            <div className="relative z-20 flex size-full flex-col items-start justify-between p-4">
              <div className="flex w-full items-center justify-between">
                <Gem className="self-end stroke-secondary" size={40} />

                <p className="text-sm font-semibold capitalize tracking-wide text-white">
                  billed monthly <br /> cancel anytime
                </p>
              </div>
              <div>
                <div>
                  <h1 className="text-3xl font-bold capitalize text-secondary lg:text-4xl">
                    expansion <br /> premium
                  </h1>

                  <p className="mt-4 w-10/12 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae odit obcaecati officia id quo culpa.
                  </p>
                </div>
                <div className="mt-8 flex w-full items-center justify-between self-end rounded-xl bg-white p-2">
                  <p className="text-3xl font-bold text-primary">$150</p>
                  <Button
                    text="get started"
                    onClick={() => null}
                    category="primary"
                    type="function"
                  />
                </div>
              </div>
            </div>
            <div className="premiumCard absolute z-10 size-full"></div>
          </div>{" "}
          <div className="flex flex-col gap-8 rounded-lg bg-primary p-4 md:w-7/12 md:p-4 lg:w-4/6 lg:p-8">
            <div className="flex flex-col items-start gap-4 rounded-lg text-white">
              <div className="rounded-lg border border-secondary px-2 py-1 text-center text-sm font-semibold uppercase text-secondary">
                <p>benefits</p>
              </div>
              <h1 className="text-nowrap text-lg font-bold uppercase md:text-xl lg:text-2xl">
                <span className="text-secondary">premium. </span>
                affordable. <br className="lg:hidden" /> all for you
              </h1>
            </div>
            <ul className="grid  gap-4 text-white md:grid-cols-2 lg:gap-8">
              {benefitFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 md:text-sm lg:text-base"
                >
                  <SquareCheckBig
                    size={16}
                    className="stroke-secondary md:hidden  lg:block"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Component>
  );
}
// --------------------PROPOSED

function Advert() {
  return (
    <div className="bg-[#F0F9ED]">
      <Component>
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-8 text-4xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Assumenda, repellendus! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti quod hic
              esse temporibus, exercitationem id delectus iste est vel corporis
              deleniti ipsam suscipit tenetur accusamus iure quam aut rerum
              mollitia quaerat, harum illum itaque repellendus. Nemo
              consequuntur iste nihil iure.
            </p>
          </div>
          <div className="size-80 md:size-[400px]">
            <img src="/images/advertHolder.png" alt="" className="size-full" />
          </div>
        </div>
      </Component>
    </div>
  );
}
