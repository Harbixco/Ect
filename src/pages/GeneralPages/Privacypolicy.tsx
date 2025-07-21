import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import { privacyPolicyData } from "../../DummyData/GenDummy";

const Privacypolicy = () => {
  return (
    <div>
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="mt-[100px]">
            <h1 className="justify-center text-4xl uppercase ">
              Privacy policy
            </h1>
            <h6 className="mt-3">Home/Privacy Policy</h6>
          </div>
        </div>
      </BlueBanner>
      <div className="mx-auto my-3 w-[95%]">
        <div>
          <h1>{privacyPolicyData.title}</h1>
          <p>Effective Date: {privacyPolicyData.effectiveDate}</p>
          <p>{privacyPolicyData.introduction}</p>
          {privacyPolicyData.sections.map((section, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
