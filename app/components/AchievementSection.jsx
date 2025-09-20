"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useInView } from "framer-motion";

const achievementList = [
  { metric: "Projects", value: 12, postfix: "+" },
  { metric: "Users Impacted", value: 100000, prefix: "~" },
  // { metric: "Awards", value: 5 },
  { metric: "Experience", value: 1, postfix: "+ Years" },
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2, damping: 10, stiffness: 100 });
  const [display, setDisplay] = useState(0);

  // Update displayed number when springValue changes
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      motionValue.set(0);        // start from 0
      motionValue.set(value);    // instantly set value for spring to animate
    }
  }, [isInView, motionValue, value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
};

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between flex-wrap">
        {achievementList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row items-center">
              {achievement.prefix}
              <AnimatedNumber value={achievement.value} />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-1">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
