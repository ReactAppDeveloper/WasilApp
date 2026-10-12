import React from 'react';
import { useTheme } from '../../theme';

import RecitersSectionBlue from './RecitersSectionBlue';
import RecitersSectionWhite from './RecitersSectionWhite';
import RecitersSectionGreen from './RecitersSectionGreen';

export default function RecitersSection(props) {

    const { theme } = useTheme();
    switch (theme) {
                    case "white":
                      return <RecitersSectionWhite {...props} />;
                
                    case "blue":
                      return <RecitersSectionBlue {...props} />;
                      case "green":
                      return <RecitersSectionGreen {...props} />;
                   }
}