import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M53.8059 32.1533H17.9353V0.459824'
      stroke='#FFFBFB'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
