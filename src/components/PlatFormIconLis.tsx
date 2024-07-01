import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatFormIconListProps {
  platform: Platform[];
}

const iconMap: { [keys: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

function PlatFormIconLis({ platform }: PlatFormIconListProps) {
  return (
    <>
      <HStack marginY={1}>
        {platform.map((platform, key) => (
          <Icon key={key} as={iconMap[platform.slug]} color={"gray.400"}></Icon>
        ))}
      </HStack>
    </>
  );
}

export default PlatFormIconLis;
