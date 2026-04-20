import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hi, I'm Syed Shuhabuddin 👋
      </motion.h1>

      <motion.p initial={{ y: 50 }} animate={{ y: 0 }}>
        Frontend Developer | React | Vite
      </motion.p>

      <button className="btn">Download Resume</button>
    </section>
  );
}

export default Hero;
