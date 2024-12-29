import { useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";

const ExcelFile = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("No file selected");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workBook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workBook.SheetNames[0];
      const worksheet = workBook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
      setError(null);
    } catch (error) {
      console.error(
        "Failed to read the Excel file. Please make sure the file is valid",
        error
      );
      setData([]);
      setError("Failed to process the file. Please check the format.");
    }
  };

  return (
    <Container>
      <Row className="my-4 ">
        <Col>
          <h4 className=" text-info fw-bold text-center mt-3">
            EXCEL FILE INPUT URL AND BELOW SHOW{" "}
          </h4>
          <hr />
          <Form.Group controlId="formFile" className="my-3 shadow p-3 rounded">
            <Form.Label className=" fw-bold ">Excel File Render</Form.Label>
            <Form.Control
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
            />
          </Form.Group>

          {/* Display error message if any */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Display table if data exists */}
          {data.length > 0 && (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => {
                    return <th key={key}>{key}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ExcelFile;
