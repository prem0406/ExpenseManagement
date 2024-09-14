import React from 'react';
import Back from './back';
import Profile from './profile';
import StopRound from './stopRound';
import PlusRound from './plusRound';
import ChevronBack from './chevronBack';
import MenuOutline from './menuOutline';

const IconsMap = {
  back: <Back />,
  profile: <Profile />,
  stopRound: <StopRound />,
  plusRound: <PlusRound />,
  chevronBack: <ChevronBack />,
  menuOutline: <MenuOutline />,
};

export type IconsType = keyof typeof IconsMap;

export {IconsMap};
