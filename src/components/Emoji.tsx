import bullsEye from "../assets/img/bulls-eye.webp";
import meh from "../assets/img/meh.webp";
import thumbsUp from "../assets/img/thumbs-up.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) {
    return <span>😐</span>;
  }

  const emojiMap: Record<number, { src: string; alt: string }> = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbs" },
    5: { src: bullsEye, alt: "buls" },
  };

  const emoji: { src: string; alt: string } | undefined = emojiMap[rating];

  return emoji ? (
    <img src={emoji.src} alt={emoji.alt} className="w-12 h-12 p-2" />
  ) : null; // Render the image if it exists, otherwise render nothing
};

export default Emoji;
