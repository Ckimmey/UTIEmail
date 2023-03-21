import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './MobileMobileHeader10_DarkModeF.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    _50HY_Logotype_SmallUse_RGB_Cop?: boolean;
  };
}
/* @figmaId 1:612 */
export const MobileMobileHeader10_DarkModeF: FC<Props> = memo(function MobileMobileHeader10_DarkModeF(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?._50HY_Logotype_SmallUse_RGB_Cop && <div className={classes._50HY_Logotype_SmallUse_RGB_Cop}></div>}
    </div>
  );
});
