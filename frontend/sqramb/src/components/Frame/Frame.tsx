import "./frame.scss";
import frameImg from "../../assets/images/frame.png";

interface FrameProps {
  className?: string;
}

const Frame: React.FC<FrameProps> = ({ className }) => {
  return <img src={frameImg} alt="frameTexture" className={`frame-image ${className}`} />;
};

export default Frame;
