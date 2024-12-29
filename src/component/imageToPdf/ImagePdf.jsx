import jsPDF from "jspdf";
import { useState } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";

const ImagePdf = () => {
  const [photos, setPhotos] = useState([]);
  const [paperSize, setPaperSize] = useState("a4");
  const [marginSize, setMarginSize] = useState("normal");
  const [imagePosition, setImagePosition] = useState("cover");

  const onChangePhoto = (e) => {
    setPhotos([...photos, ...e.target.files]);
  };

  const removePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos); // Don't forget to update state!
  };

  const getPageController = (paperSize) => {
    const units = {
      a4: { width: 595.28, height: 841.89 },
      letter: { width: 612, height: 792 },
      legal: { width: 612, height: 1004 },
      executive: { width: 512, height: 756 },
    };
    return units[paperSize];
  };

  const getMarginSize = (marginType) => {
    const margins = {
      normal: [20, 20, 20, 20],
      narrow: [20, 10, 20, 10],
      extraLarge: [10, 20, 10, 20],
      executive: [10, 20, 10, 20],
    };
    return margins[marginType];
  };

  const pdfGenerate = () => {
    const { width, height } = getPageController(paperSize);
    const margin = getMarginSize(marginSize);
    var doc = new jsPDF("p", "pt", paperSize);

    photos.forEach((photo, index) => {
      var img = URL.createObjectURL(photo);

      if (index !== 0) {
        doc.addPage();
      }

      let x = margin[0];
      let y = margin[1];
      let imageWidth = width - 2 * margin[0];
      let imageHeight = height - 2 * margin[1];

      switch (imagePosition) {
        case "top":
          y = margin[1];
          imageHeight = (height - 2 * margin[1]) / 2;
          break;
        case "center":
          y = (height - 2 * margin[1]) / 2;
          break;
        case "bottom":
          y = height - imageHeight - margin[1];
          break;
        case "cover":
          x = 0;
          y = 0;
          imageWidth = width;
          imageHeight = height;
          break;
        case "stretch":
          imageWidth = width - 2 * margin[0];
          imageHeight = height - 2 * margin[1];
          break;
        default:
          break;
      }
      doc.addImage(img, null, x, y, imageWidth, imageHeight);
    });

    // PDF ফাইলটি ডাউনলোড করা
    doc.save("photos.pdf");
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 fw-bold text-info">
        IMAGES TO CONVERT PDF FILES COLLECTING
      </h2>
      <hr />
      <Row className="mt-3">
        {/* File Upload, Settings and PDF Generation Section */}
        <Col className=" shadow p-3" lg={4}>
          <Form>
            {/* Image Upload */}
            <Form.Group>
              <Form.Label className=" fw-bold">Upload Images :</Form.Label>
              <Form.Control
                multiple
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onChangePhoto}
              />
            </Form.Group>

            {/* Paper Size Selection */}
            <Form.Group>
              <Form.Label className=" fw-bold">Paper Size</Form.Label>
              <Form.Control
                as="select"
                value={paperSize}
                onChange={(e) => setPaperSize(e.target.value)}
              >
                <option value="a4">A4</option>
                <option value="letter">Letter</option>
                <option value="legal">Legal</option>
                <option value="executive">Executive</option>
              </Form.Control>
            </Form.Group>

            {/* Margin Size Selection */}
            <Form.Group>
              <Form.Label className=" fw-bold">Margin Size</Form.Label>
              <Form.Control
                as="select"
                value={marginSize}
                onChange={(e) => setMarginSize(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="narrow">Narrow</option>
                <option value="extraLarge">Extra Large</option>
                <option value="executive">xecutive</option>
              </Form.Control>
            </Form.Group>

            {/* Image Position Selection */}
            <Form.Group>
              <Form.Label className=" fw-bold">Image Position</Form.Label>
              <Form.Control
                as="select"
                value={imagePosition}
                onChange={(e) => setImagePosition(e.target.value)}
              >
                <option value="cover">Cover</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="stretch">Stretch</option>
                <option value="top">Top</option>
                <option value="center">Center</option>
                <option value="bottom">Bottom</option>
              </Form.Control>
            </Form.Group>

            {/* Generate PDF Button */}
            <Button
              className="btn btn-primary w-100 mt-3 fw-bold btnButton"
              onClick={pdfGenerate}
              disabled={photos.length === 0}
            >
              DOWNLOAD PDF FILES
            </Button>
          </Form>
        </Col>
        {/* Photo Display Section */}
        <Col lg={8} className="d-flex flex-column align-items-center ">
          <h5 className=" fw-bold ">IMAGE TO CONVERT PDF FILES</h5>

          <div className="d-flex flex-wrap justify-content-center ">
            {photos.length > 0 ? (
              photos.map((photo, index) => (
                <Card
                  key={index}
                  className="my-3"
                  style={{ width: "500px", height: "300px" }}
                >
                  <Card.Img
                    variant="top"
                    src={URL.createObjectURL(photo)}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex justify-content-between">
                    <Button
                      variant="danger w-100 h-50 fw-bold mt-3 btn"
                      size="sm"
                      onClick={() => removePhoto(index)}
                    >
                      REMOVE IMAGE
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>NO IMAGES UPLOADED</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImagePdf;
