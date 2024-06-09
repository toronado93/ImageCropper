import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/utility/cropImage";

interface ImageCropperProps {
  imageSource: string;
}

interface Crop {
  x: number;
  y: number;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ imageSource }) => {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [initialCroppedArea, setInitialCroppedArea] = useState<any>(undefined);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSource,
        croppedAreaPixels,
        rotation
      );
      console.log("done", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          style={{
            position: "relative",
            width: "500px",
            height: "500px",
            marginInline: "auto",
          }}
        >
          {!croppedImage ? (
            <Cropper
              image={imageSource}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              initialCroppedAreaPercentages={initialCroppedArea}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={croppedImage} alt="croppedImage" />
          )}
        </div>

        <button
          onClick={showCroppedImage}
          style={{ maxWidth: "max-content" }}
          className="border p-2 rounded-lg"
        >
          Tamamla
        </button>
        <button
          onClick={() => {
            setCroppedImage(null);
          }}
          style={{ maxWidth: "max-content" }}
          className="border p-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ImageCropper;
