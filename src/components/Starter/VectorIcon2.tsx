import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.493886 32.1533H36.3645V0.459824'
      stroke='#FFFBFB'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
