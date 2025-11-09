"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useInView } from "framer-motion";

const achievementList = [
  { metric: "Projects", value: 12, postfix: "+" },
  { metric: "Users Impacted", value: 100000, prefix: "~" },
  { metric: "Experience", value: 1, postfix: "+ Years" },
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2, damping: 10, stiffness: 100 });
  const [display, setDisplay] = useState(0);

  // 🌀 Update displayed number when springValue changes
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  // 🎬 Start animation when in view
  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
};

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-16 lg:px-24 xl:px-32">
      <div
        className="border border-[#33353F] rounded-lg py-8 px-6 sm:px-10 md:px-16 
                   flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16"
      >
        {achievementList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center mx-2 sm:mx-4"
          >
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold 
                         flex flex-row items-center justify-center"
            >
              {achievement.prefix}
              <AnimatedNumber value={achievement.value} />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-sm sm:text-base md:text-lg mt-1">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
