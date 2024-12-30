import AImage from "./../assets/A-hero.png";
import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub } from "react-icons/fa";
import { TbBrandReact, TbBrandLaravel } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";

const Header = () => {
  const [showTechStack, setShowTechStack] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState([]);
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCirclePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const generateShapes = () => {
      const generatedShapes = [];
      const maxShapes = 30;
      const minDistance = 100;

      while (generatedShapes.length < maxShapes) {
        const newShape = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 80 + 40, //Larger size
          speed: Math.random() * 2 + 1, //Slow speed
          color: getRandomColor(), //Random color for each circle
        };

        const isOverlapping = generatedShapes.some((shape) => {
          const dx = shape.x - newShape.x;
          const dy = shape.y - newShape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < minDistance + (shape.size + newShape.size) / 2;
        });

        if (!isOverlapping) {
          generatedShapes.push(newShape);
        }
      }
      return generatedShapes;
    };

    setShapes(generateShapes());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          const dx = circlePosition.x - shape.x;
          const dy = circlePosition.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 5) return shape;

          const moveX = (dx / distance) * shape.speed || 0;
          const moveY = (dy / distance) * shape.speed || 0;

          let newX = shape.x + moveX;
          let newY = shape.y + moveY;

          let isOverlapping = false;
          prevShapes.forEach((otherShape) => {
            const otherDx = otherShape.x - newX;
            const otherDy = otherShape.y - newY;
            const otherDistance = Math.sqrt(
              otherDx * otherDx + otherDy * otherDy
            );

            if (
              otherShape !== shape &&
              otherDistance < (shape.size + otherShape.size) / 2
            ) {
              isOverlapping = true;
            }
          });

          if (isOverlapping) {
            return shape;
          }

          return {
            ...shape,
            x: newX,
            y: newY,
          };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [circlePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFollowerPosition((prevPosition) => {
        const dx = circlePosition.x - prevPosition.x;
        const dy = circlePosition.y - prevPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 1) return prevPosition;

        const speed = 0.08;
        const moveX = dx * speed;
        const moveY = dy * speed;

        return {
          x: prevPosition.x + moveX,
          y: prevPosition.y + moveY,
        };
      });
    }, 10);

    return () => clearInterval(interval);
  }, [circlePosition]);

  const toggleTechStack = () => {
    setShowTechStack((prev) => !prev);
  };

  return (
    <div className="header-container" onMouseMove={handleMouseMove}>
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {shapes.map((shape, index) => (
          <circle
            key={index}
            cx={shape.x}
            cy={shape.y}
            r={shape.size / 2}
            fill={shape.color}
          />
        ))}
      </svg>

      <div
        className="mouse-follower"
        style={{
          position: "absolute",
          top: `${followerPosition.y}px`,
          left: `${followerPosition.x}px`,
          width: "80px",
          height: "80px",
          backgroundColor: "black",
          borderRadius: "50%",
          zIndex: 1,
        }}
      ></div>

      <div className="name-center">
        <h1>I'm Arbaz</h1>
        <h5>Developer</h5>
        <button
          className="tech-btn btn btn-primary active"
          onClick={toggleTechStack}
        >
          {showTechStack ? "Hide Stack" : "Show Stack"}
          <div className={`tech-stack-icons ${showTechStack ? "show" : ""}`}>
            <FaHtml5 className="tech-icon" />
            <FaCss3Alt className="tech-icon" />
            <FaJs className="tech-icon" />
            <TbBrandReact className="tech-icon" />
            <FaPython className="tech-icon" />
            <SiPhp className="tech-icon" />
            <TbBrandLaravel className="tech-icon" />
            <PiFileSqlFill className="tech-icon" />
            <FaGithub className="tech-icon" />
          </div>
        </button>
      </div>

      <div className="text-center">
        <img className="A-hero" src={AImage} alt="bg" />
      </div>
    </div>
  );
};

export default Header;
