import { useEffect, useState } from "react";

type AnimatedBackgroundProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  style,
  children,
}) => {
  const [hues, setHues] = useState<number[]>([190, 198, 186, 39, 62, 148, 189]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHues((prev) =>
        prev.map((hue, i) => {
          const speed = [1.6, 1.3, 1.8, 1.5, 2.4, 2.1, 0.9]; // 각 gradient별 속도
          const newHue = hue + speed[i];
          return newHue > 360 ? newHue - 360 : newHue;
        })
      );
    }, 60); // 약 60ms 간격으로 변경하면 5초에 50번 = 부드러운 애니메이션
    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundColor: "#ffc499",
    backgroundImage: `
    radial-gradient(at 86% 34%, hsla(${hues[0]}, 68%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at 84% 58%, hsla(${hues[1]}, 77%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 6% 85%, hsla(${hues[2]}, 63%, 69%, 1) 0px, transparent 50%),
    radial-gradient(at 91% 49%, hsla(${hues[3]}, 77%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 78% 22%, hsla(${hues[4]}, 75%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 40% 10%, hsla(${hues[5]}, 94%, 78%, 1) 0px, transparent 50%),
    radial-gradient(at 75% 16%, hsla(${hues[6]}, 61%, 68%, 1) 0px, transparent 50%)`,
    width: "100%",
    minHeight: "calc(100vh - 6rem)",
    display:"flex",
    flexDirection:"column" as const,
    justifyContent:"center",
    alignItems:"center",
    ...style,
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default AnimatedBackground;
