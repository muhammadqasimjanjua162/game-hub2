import noImg from "../assets/img/no-image-icon-23485.png";
const getCroppedImageUrl = (url: string) => {
  console.log(url, "orl");
  if (!url) {
    return noImg;
  }
  console.log(url, "your");
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
