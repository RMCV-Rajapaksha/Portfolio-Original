import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useScroll,
} from "framer-motion";
import * as Icons from "react-icons/fi"; // Import all icons from react-icons/fi

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const SkillItem = ({ skill }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) - width / 2;
    const mouseY = (e.clientY - rect.top) - height / 2;

    const rX = (mouseY / height) * ROTATION_RANGE;
    const rY = (mouseX / width) * -ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Dynamically get the icon based on skill.icon name
  const IconComponent = Icons[skill.icon] || Icons.FiMousePointer;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-r from-indigo-900 to-purple-800"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute grid bg-black shadow-lg inset-4 place-content-center rounded-xl"
      >
        <IconComponent
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-2xl font-bold text-center text-white"
        >
          {skill.title}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillItem;
