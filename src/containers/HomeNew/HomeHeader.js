import React from 'react';
import { useTheme } from '../../theme';

import HomeHeaderBlue from './HomeHeaderBlue';
import HomeHeaderWhite from './HomeHeaderWhite';

export default function HomeHeader(props) {

    const { theme } = useTheme();
     switch (theme) {
            case "white":
              return <HomeHeaderWhite {...props} />;
        
            case "blue":
              return <HomeHeaderBlue {...props} />;
           }
}