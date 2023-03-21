import { memo, SVGProps } from 'react';

const SecBgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 606 858' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 185.753L606 0V858H0V185.753Z' fill='white' />
  </svg>
);
const Memo = memo(SecBgIcon);
export { Memo as SecBgIcon };
