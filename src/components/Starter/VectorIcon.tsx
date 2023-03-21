import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.493886 15.8467H36.3645V47.5402'
      stroke='#FFFBFB'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
