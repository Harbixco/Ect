import CountUp from "react-countup";
interface CountupProps {
  end: number;
}
const Countup = ({ end }: CountupProps) => {
  return <CountUp separator="," duration={2.5} start={0} end={end} />;
};

export default Countup;
