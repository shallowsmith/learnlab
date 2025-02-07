import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  const currentImage = useCarousel({ totalImages: 3 }); //TODO
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is the list of the courses you can enroll in.
            <br />
            Courses hwen you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={"Hero Banner ${index + 1}"}
              fill
              priority={index === currentImage}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
