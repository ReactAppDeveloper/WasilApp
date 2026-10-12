import React from 'react';
import { useTheme } from '../../theme';

import HomeGridBlue from './HomeGridBlue';
import HomeGridWhite from './HomeGridWhite';
import HomeGridGreen from './HomeGridGreen';
export default function HomeGrid(props) {

    const { theme } = useTheme();
     switch (theme) {
        case "white":
          return <HomeGridWhite {...props} />;
    
        case "blue":
          return <HomeGridBlue {...props} />;
          case "green":
          return <HomeGridGreen {...props} />;
       }
}