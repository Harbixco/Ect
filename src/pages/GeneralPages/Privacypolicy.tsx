import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import PrivacyContent from "../../Ultilities/PrivacyContent.md";
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
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {PrivacyContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Privacypolicy;
