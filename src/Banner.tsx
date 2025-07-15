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
      {children}
    </div>
  );
};

export default Banner;
