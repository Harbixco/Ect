

interface WebBannerProps {
  img: string;
}

const WebBanner = ({ img }: WebBannerProps) => {
  return (
    <div className="w-full">
        <img src={img} alt="" />
        
    </div>
  )
}

export default WebBanner
