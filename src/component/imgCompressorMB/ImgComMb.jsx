import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Spinner,
} from "react-bootstrap";
import imageCompression from "browser-image-compression";
import "../../assets/css/imgCompress.css"; // Ensure this file exists

const ImgComMb = () => {
  const [originalImage, setOriginalImage] = useState(null); // State for original image
  const [compressImage, setCompressImage] = useState(null); // State for compressed image
  const [originalImageSize, setOriginalImageSize] = useState(0); // State for image size
  const [isCompressing, setIsCompressing] = useState(false); // State for compressing status
  const [error, setError] = useState(""); // State for errors

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type (JPEG, PNG, JPG, GIF)
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
      ];
      if (validImageTypes.includes(file.type)) {
        setOriginalImage(file); // Set original image state
        setOriginalImageSize((file.size / 1024).toFixed(2)); // Size in KB
        setCompressImage(null); // Reset compressed image state
        setIsCompressing(false); // Reset compressing state
        setError(""); // Clear previous error message
      } else {
        setError("Please upload a valid image (JPEG/PNG/JPG/GIF).");
      }
    }
  };

  // Handle Image Compression
  const handleImageCompression = async () => {
    if (!originalImage) {
      setError("Please upload an image first.");
      return;
    }

    const options = {
      maxSizeMB: 1, // Max size in MB
      maxWidthOrHeight: 1024, // Max width/height
      useWebWorker: true, // Use web worker for compression
    };

    try {
      setIsCompressing(true); // Set compressing state to true
      const compressedFile = await imageCompression(originalImage, options); // Compress the image
      const compressedFileUrl = URL.createObjectURL(compressedFile); // Create URL for compressed image
      setCompressImage(compressedFileUrl); // Set the compressed image state
      setOriginalImageSize((compressedFile.size / 1024).toFixed(2)); // Update image size (KB)
      setIsCompressing(false); // Set compressing state to false
    } catch (error) {
      console.log("Compression error: ", error);
      setError("Error compressing the image.");
      setIsCompressing(false); // Handle error
    }
  };

  return (
    <Container className="my-5 ">
      <Row className="image-compression ">
        <Col md={4} className="upload-section me-5">
          <Card className="p-4 shadow-sm">
            <h4 className="text-center">Image Compression Tool</h4>
            <hr />
            <label htmlFor="img" className="py-2 fw-bold">
              Upload Image:
            </label>
            <br />
            <input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImageUpload}
              className="form-control mb-3"
            />

            {/* Error Message */}
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Original Image Preview */}
            {originalImage && (
              <div className="preview-section mt-3 ">
                <h5>Original Image</h5>
                <img
                  src={URL.createObjectURL(originalImage)} // Display uploaded image
                  alt="Original"
                  className="preview-img"
                />
                <p>Size: {originalImageSize} KB</p>
              </div>
            )}

            {/* Compress Button */}
            {originalImage && !isCompressing && !compressImage && (
              <Button
                variant="primary"
                onClick={handleImageCompression}
                className="mt-3 w-100"
              >
                {isCompressing ? (
                  <Spinner animation="border" size="sm" variant="light" />
                ) : (
                  "Compress Image"
                )}
              </Button>
            )}

            {/* Compressing Indicator */}
            {isCompressing && <p className="text-info">Compressing...</p>}
          </Card>
        </Col>

        {/* Compressed Image and Download Section */}
        <Col md={6} className="compressed-section">
          {compressImage && !isCompressing && (
            <Card className="p-4 shadow-sm">
              <h5>Compressed Image</h5>
              <img
                src={compressImage}
                alt="Compressed"
                className="preview-img"
              />
              <p>Size: {originalImageSize} KB</p>
              <a href={compressImage} download="compressed-image.jpg">
                <Button variant="success" className="w-100">
                  Download Compressed Image
                </Button>
              </a>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ImgComMb;
