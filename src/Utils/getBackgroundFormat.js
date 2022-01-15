import images from "../Assets/images";

const getBackgroundFormat = (setBackFormat, icon) => {
  const iconValue = icon.slice(0, 2);
  switch (iconValue) {
    case "01":
      setBackFormat(images[2]);
      break;
    case "02":
      setBackFormat(images[3]);
      break;
    case "03":
      setBackFormat(images[4]);
      break;
    case "04":
      setBackFormat(images[5]);
      break;
    case "09":
      setBackFormat(images[6]);
      break;
    case "10":
      setBackFormat(images[7]);
      break;
    case "11":
      setBackFormat(images[8]);
      break;
    case "13":
      setBackFormat(images[9]);
      break;
    case "50":
      setBackFormat(images[10]);
      break;
    default:
      setBackFormat(images[0]);
      break;
  }
};

export default getBackgroundFormat;
