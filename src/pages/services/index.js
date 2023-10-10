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
                <p>As an experienced language teacher fluent in English, Ukrainian, and Russian, I offer comprehensive lessons tailored to individual needs. My unique teaching methods blend cultural insights with interactive exercises, ensuring a holistic learning experience that stimulates both the mind and the soul.</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Creative Writing</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>With a natural flair for words and emotions, I craft poems that tug at heartstrings. Whether you're seeking to communicate a narrative, an emotion, or a vivid scene, my creative writing services can breathe life into your thoughts, making them resonate with readers universally.</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Poetry Translation</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>Poetry translation is an art of preserving the emotion, rhythm, and essence of the original piece. Leveraging my linguistic prowess in English, Ukrainian, and Russian, I ensure that translated poems convey their intended emotion and meaning, regardless of the language barrier.</p>
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
                    <p className="service_desc">Harness the power of compelling language to elevate your brand's presence. With tailored content and articles, I can enhance your brand image, drive engagement, and foster a strong connection with your target audience.</p>
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
