import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './MouseFollower.module.scss';

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const MouseFollower: React.FC<Props> = ({ containerRef }) => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setPosition({ x, y });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  useEffect(() => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    const pushableObjects = Array.from(container.querySelectorAll('[data-pushable]')) as HTMLElement[];

    pushableObjects.forEach(obj => {
      const objRect = obj.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const objCenterX = objRect.left - containerRect.left + objRect.width / 2;
      const objCenterY = objRect.top - containerRect.top + objRect.height / 2;

      const dx = position.x - objCenterX;
      const dy = position.y - objCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const pushRadius = 120;
      const maxPushForce = 40;
      
      if (distance < pushRadius) {
        const pushStrength = Math.pow(1 - distance / pushRadius, 1.5) * maxPushForce;
        const angle = Math.atan2(dy, dx);
        const pushX = -Math.cos(angle) * pushStrength;
        const pushY = -Math.sin(angle) * pushStrength;

        obj.style.transform = `translate(${pushX}px, ${pushY}px)`;
        obj.style.transition = 'transform 0.15s cubic-bezier(0.2, 0.8, 0.3, 1)';
      } else {
        obj.style.transform = `translate(0, 0)`;
        obj.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.3, 1)';
      }
    });
  }, [position, isVisible, containerRef]);

  return (
    <motion.div
      ref={followerRef}
      className={styles.follower}
      animate={{
        x: position.x - 25,
        y: position.y - 25,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 400,
        mass: 0.5
      }}
    />
  );
}; 