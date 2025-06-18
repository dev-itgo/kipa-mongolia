import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "730401369458359";
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);

  return null;
};

export default PixelTracker;
