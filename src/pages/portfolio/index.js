import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {

  return (
    <HelmetProvider>
      <Container sx={{ mt: 3, mb: 5 }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Testimonials</title>
        </Helmet>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography variant="h4" component="div" gutterBottom>
            Testimonials
          </Typography>
          <hr style={{ backgroundColor: "#000", height: "1px", width: "50%", margin: '0 auto' }} />
        </Box>

        <Grid container spacing={3} sx={{ gap: '2rem', justifyContent: 'space-between' }}>
          {dataportfolio.map((data, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card 
                sx={{ 
                  maxWidth: 345,
                  transition: 'all 0.3s ease',
                  boxShadow: 3,
                  background: (theme) => theme.palette.mode === 'dark' ? 'var(--bg-color-dark)' : 'var(--bg-color-light)',
                  color: (theme) => theme.palette.mode === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'var(--secondary-color-dark)' : 'var(--primary-color-light)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"  // Made the image twice as big
                    image={data.img}
                    alt={`Photograph of ${data.author || "Anonymous"}`}
                    sx={{ 
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)' // Enhanced hover effect
                      }
                    }}
                  />
                  <CardContent sx={{
                    background: (theme) => theme.palette.mode === 'dark' ? 'var(--secondary-color-dark)' : 'var(--secondary-color-light)',
                    padding: 2
                  }}>
                    <Typography variant="body2" color="text.secondary" sx={{ 
                        fontStyle: 'italic', 
                        mb: 2,
                        color: (theme) => theme.palette.mode === 'dark' ? 'var(--primary-color-dark)' : 'var(--text-color-light)'
                    }}>
                        {data.description}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Language: {data.language || "Unknown"} | Lessons: {data.lessons || "Unknown"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                        {data.author || "Anonymous"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;


// previous working 
// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import { dataportfolio, meta } from "../../content_option";

// export const Portfolio = () => {
//   const [fontSize, setFontSize] = useState(16);
//   const contentRefs = useRef([]);

//   useEffect(() => {
//     window.addEventListener("resize", adjustFontSize);
//     return () => window.removeEventListener("resize", adjustFontSize);
//   }, []);

//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Testimonials | {meta.title}</title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Testimonials </h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => (
//             <Col md={4} key={i} className="mb-4">
//               <div className="po_item card">
//                 <img
//                   src={data.img}
//                   alt={`Photograph of ${data.author || "Anonymous"}`}
//                   className="card-img-top testimonial-image"
//                 />
//                 <div className="card-body">
//                   <p className="testimonial-text">{data.description}</p>
//                   <small className="testimonial-date">{data.date || "Date Unknown"}</small>
//                   <p className="testimonial-author">{data.author || "Anonymous"}</p>
//                   <a href={data.link} className="btn btn-primary">View Project</a>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </HelmetProvider>
//   );
// };
