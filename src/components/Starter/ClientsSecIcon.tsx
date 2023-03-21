import { memo, SVGProps } from 'react';

const ClientsSecIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1008 948' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.9181 235.109L1007.2 28.8738L987.524 696.883L0.243654 903.119L19.9181 235.109Z'
      fill='url(#paint0_linear_520_6778)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_520_6778'
        x1={670.555}
        y1={134.178}
        x2={680.394}
        y2={849.325}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' stopOpacity={0.93} />
        <stop offset={1} stopColor='white' stopOpacity={0.82} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(ClientsSecIcon);
export { Memo as ClientsSecIcon };
