import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import { Link } from "react-router-dom";

const Gencourses = () => {
  return (
    <div>
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">Courses</h1>
            <h6 className="mt-3">Home/Courses</h6>
          </div>
        </div>
      </BlueBanner>

      <div className="my-[40px] bg-gray-300 py-2">
        <div className="my-8 items-center  text-center">
          <div className="mt-[50px]">
            <h1 className="justify-center text-xl font-bold uppercase md:text-2xl ">
              Thank You for Your Interest!
            </h1>
            <p className="mt-3">
              You're being redirected to our course catalog. If you aren't
              automatically redirected, please{" "}
              <Link to="/course" className="text-green-500">
                click here
              </Link>{" "}
              to explore our exciting courses.
            </p>
            <h6 className="mt-3 font-bold">Happy Learning!</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gencourses;
