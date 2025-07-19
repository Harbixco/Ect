import H1 from "../H1";
import TabsHolder from "./Tabs";

export default function Expectations() {
  return (
    <div className="w-full">
      <H1 text="What you'll learn" />
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        {/* <div className="h-80 md:h-[550px] md:w-1/3">
          <img
            src="/images/expectation.png"
            alt=""
            className="size-full object-cover"
          />
        </div> */}
        <TabsHolder />
      </div>
    </div>
  );
}
