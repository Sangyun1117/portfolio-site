import "./css/Banner.css";
type BannerProps = {
  className?:string;
  children?: React.ReactNode;
  onClick?: () => void;
};
const Banner: React.FC<BannerProps> = ({
  className,
  children,
  onClick
}) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="imgdiv">  
      </div>
      <div style={{backgroundColor:"gray"}}>
        {children}
      </div>
    </div>

  );
};

export default Banner;
