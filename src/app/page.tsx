"use client";
import ImagePicker from "@/components/ImagePicker";
import ImageCropper from "@/components/ImageCropper";
import { useState } from "react";

export default function Page() {
  const [imageSource, setImageSource] = useState<any>();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSource(imageUrl);
    }
  };

  return (
    <>
      <ImagePicker handleFileChange={handleFileChange} />
      {imageSource && <ImageCropper imageSource={imageSource} />}
    </>
  );
}
