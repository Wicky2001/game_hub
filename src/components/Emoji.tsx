import { Image, ImageProps } from "@chakra-ui/react";

import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets//meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}

function Emoji({ rating }: EmojiProps) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "32px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "30px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "40px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
