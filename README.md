Image Cropper Project
This project provides a simple image cropping functionality using React and TypeScript. It allows users to upload an image, crop it, and retrieve the cropped image either as a Blob object or a base64 string. The core components and utilities used in this project are ImageCropper, createImage, getRadianAngle, rotateSize, and getCroppedImg.

Components and Utilities

1. ImageCropper Component
   This is the main React component responsible for displaying the image cropper UI and handling user interactions.

Props:

imageSource (string): The source URL of the image to be cropped.
State:

crop (object): Stores the current crop position.
rotation (number): Stores the rotation angle for the image.
initialCroppedArea (any): Stores the initial cropped area.
croppedAreaPixels (any): Stores the cropped area pixels.
zoom (number): Stores the zoom level.
croppedImage (string | null): Stores the cropped image URL.
Functions:

onCropComplete: Callback function to update the cropped area pixels.
showCroppedImage: Async function to get and display the cropped image. 2. createImage Utility
This utility function creates an HTMLImageElement from a given URL.

Parameters:

url (string): The URL of the image.
Returns:

Promise<HTMLImageElement>: A promise that resolves to an HTMLImageElement. 3. getRadianAngle Utility
This utility function converts a degree value to radians.

Parameters:

degreeValue (number): The degree value to convert.
Returns:

number: The radian value. 4. rotateSize Utility
This utility function calculates the new bounding area of a rotated rectangle.

Parameters:

width (number): The width of the rectangle.
height (number): The height of the rectangle.
rotation (number): The rotation angle in degrees.
Returns:

object: An object containing the new width and height. 5. getCroppedImg Utility
This utility function handles the core cropping logic. It takes an image source, cropping area, rotation, and flip options, and returns the cropped image.

Parameters:

imageSrc (string): The source URL of the image.
pixelCrop (object): The cropping area.
rotation (number, optional): The rotation angle. Default is 0.
flip (object, optional): The flip options. Default is { horizontal: false, vertical: false }.
Returns:

Promise<string | null>: A promise that resolves to the cropped image URL.
Project Flow
Image Upload: Users upload an image, and the imageSource prop is set to the uploaded image URL.
Cropping: The ImageCropper component displays the image using react-easy-crop. Users can adjust the crop area and zoom level.
Crop Completion: When cropping is complete, the onCropComplete function updates the croppedAreaPixels state with the cropping details.
Cropping Image: On clicking the "Tamamla" button, the showCroppedImage function is called. This function uses the getCroppedImg utility to crop the image based on the specified cropping area, rotation, and flip options.
Displaying Cropped Image: The cropped image URL is set in the croppedImage state and displayed to the user.
