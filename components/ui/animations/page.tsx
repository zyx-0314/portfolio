'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationContainerProps
{
  children: any
  animation: 'Fade In Top' | 'Fade In Bottom' | 'Slide In Left' | 'Slide In Right' | 'Slide In Top' | 'Slide In Bottom'
  scale?: number
  duration?: number
  initialX?: number
  initialY?: number
}

const AnimationContainer = ( { children, animation, scale = 1.1, duration = 0.5, initialX = 20, initialY = 20 }: AnimationContainerProps ) =>
{
  const control = useAnimation();
  const [ ref, inView ] = useInView();

  const fadeInBottomInRange = {
    visible: { opacity: 1, scale: 1, transition: { duration: duration } },
    hidden: { opacity: 0, scale: 0, transition: { duration: duration } }
  };

  const fadeInTopInRange = {
    visible: { opacity: 1, scale: 1, transition: { duration: duration } },
    hidden: { opacity: 0, scale: scale, transition: { duration: duration } }
  };

  const slideInLeft = {
    visible: { opacity: 1, x: 0, transition: { duration: duration } },
    hidden: { opacity: 0, x: initialX * -1, transition: { duration: duration } }
  }

  const slideInRight = {
    visible: { opacity: 1, x: 0, transition: { duration: duration } },
    hidden: { opacity: 0, x: initialX, transition: { duration: duration } }
  }

  const slideInTop = {
    visible: { opacity: 1, y: 0, transition: { duration: duration } },
    hidden: { opacity: 0, y: initialY, transition: { duration: duration } }
  }

  const slideInBottom = {
    visible: { opacity: 1, y: 0, transition: { duration: duration } },
    hidden: { opacity: 0, y: initialY * -1, transition: { duration: duration } }
  }

  const animationVariants = [
    { name: 'Fade In Top', variants: fadeInTopInRange },
    { name: 'Fade In Bottom', variants: fadeInBottomInRange },
    { name: 'Slide In Left', variants: slideInLeft },
    { name: 'Slide In Right', variants: slideInRight },
    { name: 'Slide In Top', variants: slideInTop },
    { name: 'Slide In Bottom', variants: slideInBottom },
  ]


  useEffect( () =>
  {
    if ( inView )
    {
      control.start( "visible" );
    } else
    {
      control.start( "hidden" );
    }

  }, [ control, inView ] );

  return (
    <motion.div
      className={
        animation === 'Fade In Top' ?
          inView
            ? ''
            : 'invisible '
          : ''
      }
      ref={ ref }
      variants={ animationVariants.find( ( variant ) => variant.name === animation )?.variants }
      initial="hidden"
      animate={ control }
    >
      { children }
    </motion.div>
  );
};

export default AnimationContainer;