import { randomNumber } from './randomNumber';

export const sparkleColor = 'hsl(50deg, 100%, 50%)';

const MIN_RANDOM_ID_RANGE = 10000;
const MAX_RANDOM_ID_RANGE = 99999;
const MIN_RANDOM_SIZE_RANGE = 10;
const MAX_RANDOM_SIZE_RANGE = 20;
const MIN_RANDOM_TOP_POSITION = 0;
const MAX_RANDOM_TOP_POSITION = 100;
const MIN_RANDOM_LEFT_POSITION = 0;
const MAX_RANDOM_LEFT_POSITION = 100;

export const generateSparkle = () => {
  return {
    id: String(randomNumber(MIN_RANDOM_ID_RANGE, MAX_RANDOM_ID_RANGE)),
    color: sparkleColor,
    size: randomNumber(MIN_RANDOM_SIZE_RANGE, MAX_RANDOM_SIZE_RANGE),
    style: {
      top: randomNumber(MIN_RANDOM_TOP_POSITION, MAX_RANDOM_TOP_POSITION) + '%',
      left: randomNumber(MIN_RANDOM_LEFT_POSITION, MAX_RANDOM_LEFT_POSITION) + '%',
      zIndex: 2,
    },
  };
};
