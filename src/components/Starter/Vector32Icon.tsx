import { memo, SVGProps } from 'react';

const Vector32Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 432 104' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 57.5L432 0V44.5L0.5 104V57.5Z' fill='#EEFFA3' />
  </svg>
);
const Memo = memo(Vector32Icon);
export { Memo as Vector32Icon };
