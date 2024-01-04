import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export const Carousel = (props) => {
  const buttonValues = props?.imgLinks?.map((item, index) => {
    return index;
  });

  const carouselRef = useRef();
  const DRAG_BUFFER = 10;
  const [activeSlideButton, setActiveSlideButton] = useState(0);
  const [dragging, setDragging] = useState(false);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      setActiveSlideButton(Math.min(activeSlideButton + 1, buttonValues.length - 1));
    } else if (x >= DRAG_BUFFER) {
      setActiveSlideButton(Math.max(activeSlideButton - 1, 0));
    }
  };

  const dragX = useMotionValue(0);

  return (
    <div className="w-full h-full">
      <motion.div id="carousel" ref={carouselRef} className="overflow-hidden h-full w-full">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          animate={{
            translateX: `-${activeSlideButton * 100}%`,
          }}
          style={{
            x: dragX,
          }}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          className={`flex justify-items-center items-center cursor-grab active:cursor-grabbing w-full h-full`}
        >
          {props?.imgLinks?.map((s, index) => {
            return (
              <div className="w-full h-full shrink-0 flex items-center justify-center" key={index}>
                <img
                  src={s}
                  className={`object-cover aspect-auto ${
                    props.imageStyles[index] ? "w-full" : "h-full"
                  }`}
                  style={{
                    zIndex: "-1",
                    position: "relative",
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className="flex justify-center m-2.5">
        {buttonValues?.map((index) => {
          return (
            <button
              onClick={() => {
                setActiveSlideButton(index);
              }}
              className={`border-t-2 m-0.5 ${
                activeSlideButton === index ? "w-[45px] border-black" : "w-5 border-[#B6B6B6]"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
