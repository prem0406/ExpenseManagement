import React from 'react';
import Back from './back';
import Profile from './profile';
import StopRound from './stopRound';
import PlusRound from './plusRound';

const IconsMap = {
  back: <Back />,
  profile: <Profile />,
  stopRound: <StopRound />,
  plusRound: <PlusRound />,
};

export type IconsType = keyof typeof IconsMap;

export {IconsMap};
