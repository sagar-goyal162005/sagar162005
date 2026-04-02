import { motion } from "framer-motion";

export default function Rocket({ target }) {
  return (
    <motion.div
      className="rocket"
      animate={{ x: target.x, y: target.y, rotate: target.rotate }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
    >
      🚀
    </motion.div>
  );
}
