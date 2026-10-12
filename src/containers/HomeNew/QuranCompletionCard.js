import React from 'react';
import { useTheme } from '../../theme';

import QuranCompletionCardBlue from './QuranCompletionCardBlue';
import QuranCompletionCardWhite from './QuranCompletionCardWhite';
import QuranCompletionCardGreen from './QuranCompletionCardGreen';

export default function QuranCompletionCard(props) {

    const { theme } = useTheme();
     switch (theme) {
                    case "white":
                      return <QuranCompletionCardWhite {...props} />;
                
                    case "blue":
                      return <QuranCompletionCardBlue {...props} />;
                      case "green":
                      return <QuranCompletionCardGreen {...props} />;
                   }
}