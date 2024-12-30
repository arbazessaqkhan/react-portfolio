import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../App.css";
import newsImg from "./../assets/news.png";
import cloneImg from "./../assets/clone.png";
import calImg from "./../assets/cal.png";
import todoImg from "./../assets/todo.png";

const projects = [
  {
    title: "News App",
    subtitle: "Dynamic News Application",
    description:
      "A dynamic news app leveraging News API to display the latest news in an intuitive and responsive interface.",
    image: newsImg,
    tags: ["HTML", "CSS", "JS", "News API"],
  },
  {
    title: "Usability Hub Clone",
    subtitle: "Interactive UI Clone",
    description:
      "A functional clone of Usability Hub featuring sleek UI design and interactive elements, built with HTML, CSS, and JavaScript.",
    image: cloneImg,
    tags: ["HTML", "CSS", "JS", "Font Awesome"],
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Latest Works</h2>
      <div className="vertical-line"></div>

      {/* Desktop View */}
      <div className="projects-list desktop-view">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${
              index % 2 === 0 ? "left-align" : "right-align"
            }`}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p className="description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="connecting-line"></div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="swiper-container mobile-view">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="carousel-image"
                />
                <div className="carousel-content">
                  <h3 className="carousel-title">{project.title}</h3>
                  <p className="carousel-subtitle">{project.subtitle}</p>
                  <p className="carousel-description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
