import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import TrustBadges from '../components/TrustBadges';

const HomePage: React.FC = () => {
  // Cấu hình hiệu ứng chung
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* 1. Banner: Hiện ra ngay lập tức nhưng mượt */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.section>

      {/* 2. Categories: Trượt nhẹ từ dưới lên sau 0.2s */}
      <motion.section
        variants={fadeInUp}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Categories />
      </motion.section>

      {/* 3. TrustBadges: Hiện ra sau cùng kèm hiệu ứng giãn nở */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <TrustBadges />
      </motion.section>
    </motion.div>
  );
};

export default HomePage;