'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const ParallaxScroll = ({ images, className }: { images: any[]; className?: string }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ['start start', 'end start'] // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  console.log('firstPart', firstPart);

  return (
    <div className={cn('h-screen items-start overflow-y-auto w-full', className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start px-6 gap-6 " ref={gridRef}>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={'grid-1' + idx}
            >
              <img src={el.src} className="h-80 w-full object-cover object-left-top  gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <img src={el.src} className="h-80 w-full object-cover object-left-top  gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <img src={el.src} className="h-80 w-full object-cover object-left-top  gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
