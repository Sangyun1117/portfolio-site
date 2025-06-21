
type AboutContentProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
const AboutContent: React.FC<AboutContentProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default AboutContent;
