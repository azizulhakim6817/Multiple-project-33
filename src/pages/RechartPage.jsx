import React from "react";
import Layout from "../component/layout/Layout";
import { Card, Container, Row } from "react-bootstrap";
import Rechart from "./../component/rechart/Rechart";
import CustomAreaChart from "./../component/rechart/CustomAreaChart";
import CustomPieChart from "./../component/rechart/CustomPieChart";
import StackedBarChart from "./../component/rechart/StackedBarChart ";
import ComposedChartExample from "../component/rechart/ComposedChartExample";

const RechartPage = () => {
  return (
    <Layout>
      <Container className="my-5  ">
        <Row>
          <Card className=" col-md-8  mx-auto">
            <Card.Header className="header fw-bold">
              Simple Line Chart
            </Card.Header>
            <Card.Body>
              <Rechart />
            </Card.Body>
          </Card>
        </Row>
      </Container>
      {/* Custom Area Chart............................................ */}
      <Container className="my-5  ">
        <Row>
          <Card className=" col-md-8  mx-auto">
            <Card.Header className="header fw-bold">
              Simple Custom Area Chart
            </Card.Header>
            <Card.Body>
              <CustomAreaChart />
            </Card.Body>
          </Card>
        </Row>
      </Container>
      {/* PieChart................................... */}
      <Container className="my-5  ">
        <Row>
          <Card className=" col-md-8  mx-auto">
            <Card.Header className="header fw-bold">
              Simple PieChart
            </Card.Header>
            <Card.Body>
              <CustomPieChart />
            </Card.Body>
          </Card>
        </Row>
      </Container>
      {/* StackedBarChart................................... */}
      <Container className="my-5  ">
        <Row>
          <Card className=" col-md-8  mx-auto">
            <Card.Header className="header fw-bold">
              Stacked Bar Chart
            </Card.Header>
            <Card.Body>
              <StackedBarChart />
            </Card.Body>
          </Card>
        </Row>
      </Container>
      {/* ComposedChartExample................................... */}
      <Container className="my-5  ">
        <Row>
          <Card className=" col-md-8  mx-auto">
            <Card.Header className="header fw-bold">
              Composed Chart Example
            </Card.Header>
            <Card.Body>
              <ComposedChartExample />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Layout>
  );
};

export default RechartPage;
