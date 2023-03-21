import { memo, SVGProps } from 'react';

const ClientsSecIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 956 702' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M83 175.203L956 0V497.798L83 673V175.203Z' fill='url(#paint0_linear_520_6784)' />
    <path
      d='M9.36478 214.38L888.198 13.4795L914.806 501.094L35.9726 701.995L9.36478 214.38Z'
      fill='url(#paint1_linear_520_6784)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_520_6784'
        x1={659.241}
        y1={85.7863}
        x2={678.505}
        y2={618.331}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' stopOpacity={0.93} />
        <stop offset={1} stopColor='#CEFA05' stopOpacity={0.82} />
      </linearGradient>
      <linearGradient
        id='paint1_linear_520_6784'
        x1={590.858}
        y1={107.465}
        x2={626.306}
        y2={629.327}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4B9F46' />
        <stop offset={1} stopColor='#4B9F46' stopOpacity={0.57} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(ClientsSecIcon2);
export { Memo as ClientsSecIcon2 };
