import "./css/Banner.css";
type BannerProps = {
  className?:string;
  children?: React.ReactNode;
};
const Banner: React.FC<BannerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Banner;
