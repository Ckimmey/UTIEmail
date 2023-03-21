import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M53.8068 15.8467H17.9363V47.5402'
      stroke='#FFFBFB'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
