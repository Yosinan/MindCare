import React from "react";
import {Carousel } from "bootstrap";

const Testimonails = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsum nulla, impedit id incidunt eius, modi ea est quas dicta fuga
            asperiores. Est voluptatum doloribus non voluptate quis eos
            quibusdam?
          </p>
          {/* <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsum nulla, impedit id incidunt eius, modi ea est quas dicta fuga
            asperiores. Est voluptatum doloribus non voluptate quis eos
            quibusdam?
          </p>

          {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonails;
