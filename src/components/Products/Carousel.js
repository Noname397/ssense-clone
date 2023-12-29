import { useEffect, useState,useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
export const Carousel = ({slides}) => {
    const buttonValues = slides.map((item, index) => {
        return index;
    });
    const carouselRef = useRef();
    const DRAG_BUFFER = 10;
    console.log("DRAG_BUFFER " + DRAG_BUFFER);
    const [activeSlideButton, setActiveSlideButton] = useState(0);
    const [dragging,setDragging] = useState(false);
    const onDragStart = () => {
      setDragging(true);
    }
    const onDragEnd = () => {
      setDragging(false);

      const x = dragX.get();
      console.log("x: " + x);
      if (x <= -DRAG_BUFFER){
        setActiveSlideButton(Math.min(activeSlideButton+1,slides?.length-1));
      } else if (x >= DRAG_BUFFER){
        setActiveSlideButton(Math.max(activeSlideButton-1,0));
      }
    } 
    const dragX = useMotionValue(0);
    const [imageStyles, setImageStyles] = useState([]);

  const handleImageLoad = (index, event) => {
    event.preventDefault();
    const { naturalWidth, naturalHeight } = event.target;
    console.log(index+":"+naturalHeight + "-" + naturalWidth);
    const isWide = naturalWidth > naturalHeight;
    console.log("isWide",isWide);
    setImageStyles(prevStyles => {
      const newStyles = [...prevStyles];
      console.log("before adding", newStyles);
      newStyles.push(isWide);
      console.log("newStyles", newStyles);
      console.log("after adding", newStyles);
      return newStyles;
  });
  };

  useEffect(() => {
    // Load image dimensions when the component mounts
    const handleAllImage = async () => {
      slides.forEach((_, index) => {
        const img = new Image();
        img.onload = (event) => handleImageLoad(index, event);
        img.src = slides[index];
      });
    }
    handleAllImage();
  }, [slides]);

  useEffect(() => {
    console.log(imageStyles);
  },[imageStyles])
    return (
        <div className="w-full h-full">
            <motion.div id="carousel" ref={carouselRef} className="overflow-hidden h-full w-full">
                <motion.div
                drag="x"
                dragConstraints={
                  {
                    left: 0,
                    right: 0,
                  }
                }
                animate={{
                  translateX: `-${activeSlideButton * 100}%`
                }}
                style={{
                  x:dragX,
                }}
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
                className={`flex justify-items-center items-center cursor-grab active:cursor-grabbing w-full h-full`}
                >
                    {slides.map((s,index) => {
                        return (
                            <div className="w-full h-full shrink-0 flex items-center justify-center" key={index}>
                                <img src={s} className={`object-cover aspect-auto
                                 ${
                                  imageStyles[index] ? "w-full" : "h-full"
                                }`} 
                                style={{
                                  zIndex: "-1",position: "relative",
                                }} 
                                alt="" 

                                // onLoad={(event) => handleImageLoad(index,event)}
                                />
                            </div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <div className="flex justify-center m-2.5">
            {buttonValues.map((index) => {
              return (
                <button
                  onClick={() => {
                    setActiveSlideButton(index);
                  }}
                  className={`border-t-2 m-0.5 ${
                    activeSlideButton === index
                      ? "w-[45px] border-black"
                      : "w-5 border-[#B6B6B6]"
                  }`}
                ></button>
              );
            })}
          </div>        
        </div>


    )
}