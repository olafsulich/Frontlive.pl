import { randomNumber } from './randomNumber';

export const sparkleColor = 'hsl(50deg, 100%, 50%)';

export const generateSparkle = () => {
  return {
    id: String(randomNumber(10000, 99999)),
    createdAt: Date.now(),
    color: sparkleColor,
    size: randomNumber(10, 20),
    style: {
      top: randomNumber(0, 100) + '%',
      left: randomNumber(0, 100) + '%',
      zIndex: 2,
    },
  };
};
