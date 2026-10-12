import React from 'react';
import { useTheme } from '../../theme';

import WallOfRemembranceBlue from './WallOfRemembranceBlue';
import WallOfRemembranceWhite from './WallOfRemembranceWhite';
import WallOfRemembranceGreen from './WallOfRemembranceGreen';

export default function WallOfRemembrance(props) {

    const { theme } = useTheme();
     switch (theme) {
                            case "white":
                              return <WallOfRemembranceWhite {...props} />;
                        
                            case "blue":
                              return <WallOfRemembranceBlue {...props} />;
                               case "green":
                              return <WallOfRemembranceGreen {...props} />;
                           }
}