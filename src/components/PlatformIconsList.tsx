import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

// Define a type for the valid platform names
type PlatformName =
  | "windows"
  | "playstation"
  | "xbox"
  | "apple"
  | "linux"
  | "android"
  | "nintendo"
  | "ios"
  | "globe";

interface Props {
  plateforms: Platform[];
}

const PlatformIconsList = ({ plateforms }: Props) => {
  const iconMap: Record<PlatformName, JSX.Element> = {
    windows: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    apple: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    nintendo: <SiNintendo />,
    ios: <MdPhoneIphone />,
    globe: <BsGlobe />,
  };

  return (
    <div className="flex flex-row justify-center">
      {plateforms.map((platform) => (
        <div key={platform.name} className="text-gray-500 mr-1">
          {iconMap[platform.name.toLowerCase() as PlatformName]}{" "}
        </div>
      ))}
    </div>
  );
};

export default PlatformIconsList;
