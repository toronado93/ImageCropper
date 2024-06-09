interface IImagePicker {
  handleFileChange: (e: any) => void;
}

const ImagePicker = ({ handleFileChange }: IImagePicker) => {
  return <input type="file" accept="image/*" onChange={handleFileChange} />;
};

export default ImagePicker;
