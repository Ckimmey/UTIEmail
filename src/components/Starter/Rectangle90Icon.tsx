import { memo, SVGProps } from 'react';

const Rectangle90Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 857 1607' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 190.841L857 0V1416.16L0 1607V190.841Z' fill='white' />
  </svg>
);
const Memo = memo(Rectangle90Icon);
export { Memo as Rectangle90Icon };
