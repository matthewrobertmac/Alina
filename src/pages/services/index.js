import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { services, meta } from "../../content_option";

export const Services = () => {
  return (
    <HelmetProvider>
      <div className="parallax">
        <Container className="Services-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Services | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">My Services</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Language Teaching</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>With years of experience, I offer interactive and engaging lessons that combine cultural understanding to encourage language exploration and creativity.</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Creative Writing</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>My passion lies in crafting captivating poems that resonate deeply with readers. Let me help you express your emotions and ideas through words.</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Poetry Translation</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>Fluent in English, Ukrainian, and Russian, I specialize in translating poetry while preserving its essence and beauty across languages.</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Brand Promotion</h3>
            </Col>
            <Col lg="7">
              {services.map((data, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </HelmetProvider>
  );
};
