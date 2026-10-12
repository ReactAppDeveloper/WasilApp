import React from 'react';
import { useTheme } from '../../theme';

import DuaCardNewListBlue from './DuaCardNewListBlue';
import DuaCardNewListWhite from './DuaCardNewListWhite';
import DuaCardNewListGreen from './DuaCardNewListGreen';

export default function DuaCardNewList(props) {

    const { theme } = useTheme();

    switch (theme) {
    case "white":
      return <DuaCardNewListWhite {...props} />;

    case "blue":
      return <DuaCardNewListBlue {...props} />;
       case "green":
      return <DuaCardNewListGreen {...props} />;
   }
}