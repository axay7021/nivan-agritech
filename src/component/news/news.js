import React from "react";
import Slider from "react-slick";
import { Grid, Box, Typography } from "@mui/material";
import "./news.css";

const cardsData = [
  {
    id: 1,
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmo4Qgh40IONukIkq9GhIlsLU-kZhjwt-PxUsn4ZbCKq9A_jmkj3D2QocAJqkfp_boEI0&usqp=CAU",
  },
  {
    id: 2,
    title: "Amazing Second Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    image:
      "https://media.istockphoto.com/id/2148752107/photo/indian-rural-farmer-spraying-insecticides-in-the-paddy-crop-field-while-holding-crops-in-hand.jpg?s=612x612&w=0&k=20&c=MwTa4sXcR1qPMd0gLVBw58ftlfuT7iPbSuFKyXwbxgA=",
  },
  {
    id: 3,
    title: "Amazing Third Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image:
      "https://financialsamachar.com/wp-content/uploads/2020/09/farmer.jpg",
  },
  {
    id: 4,
    title: "Amazing Fourth Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image:
      "https://cdn.create.vista.com/api/media/small/198643274/stock-photo-farmer-spraying-toxic-pesticides-insecticides-vegetable-farm",
  },
  {
    id: 5,
    title: "Amazing Fifth Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image:
      "https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/29135321/maize-in-zambia.jpg",
  },
  {
    id: 6,
    title: "Amazing Sixth Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image:
      "https://media.istockphoto.com/id/1160197307/photo/indian-farmer-spraying-pesticide-at-cotton-field.jpg?s=612x612&w=0&k=20&c=VYd-5G0NXUqm5UCTIXfPqJxhNpI4L6hwYfYQ2nl_lAo=",
  },
];

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Grid container mt={2} spacing={2} justifyContent="center">
      <Grid item xs={12} md={7} className="slider-container">
        <Slider {...settings} className="news-card-box">
          {cardsData.map((card) => (
            <div key={card.id} className="news-card-wrapper">
              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src={card.image}
                  alt={card.title}
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <Typography variant="h6" className="news-card__title">
                    {card.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="news-card__post-date"
                  >
                    {card.date}
                  </Typography>
                  <Typography variant="body2" className="news-card__excerpt">
                    {card.excerpt}
                  </Typography>
                  <a href="#" className="news-card__read-more">
                    Read more <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Grid>

      <Grid item xs={12} md={5} className="green-screen-container">
        <video
          src="https://www.youtube.com/watch?v=heTxEsrPVdQ"
          controls
          className="green-screen-video"
        />
      </Grid>
    </Grid>
  );
};

export default NewsSlider;
