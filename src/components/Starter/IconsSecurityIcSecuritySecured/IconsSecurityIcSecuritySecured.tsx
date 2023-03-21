import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsSecurityIcSecuritySecured.module.css';
import { IcSecuritySecuredProfileIcon } from './IcSecuritySecuredProfileIcon';

interface Props {
  className?: string;
  classes?: {
    icSecuritySecuredProfile?: string;
    root?: string;
  };
}
/* @figmaId 469:3196 */
export const IconsSecurityIcSecuritySecured: FC<Props> = memo(function IconsSecurityIcSecuritySecured(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icSecuritySecuredProfile || ''} ${classes.icSecuritySecuredProfile}`}>
        <IcSecuritySecuredProfileIcon className={classes.icon} />
      </div>
    </div>
  );
});
