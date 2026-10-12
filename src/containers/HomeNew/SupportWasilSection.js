import React from 'react';
import { useTheme } from '../../theme';

import SupportWasilSectionBlue from './SupportWasilSectionBlue';
import SupportWasilSectionWhite from './SupportWasilSectionWhite';
import SupportWasilSectionGreen from './SupportWasilSectionGreen';

export default function SupportWasilSection(props) {

    const { theme } = useTheme();

     switch (theme) {
                        case "white":
                          return <SupportWasilSectionWhite {...props} />;
                    
                        case "blue":
                          return <SupportWasilSectionBlue {...props} />;
                          case "green":
                          return <SupportWasilSectionGreen {...props} />;
                       }
}