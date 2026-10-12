import React from 'react';
import { useTheme } from '../../theme';

import IslamicStoriesSectionBlue from './IslamicStoriesSectionBlue';
import IslamicStoriesSectionWhite from './IslamicStoriesSectionWhite';
import IslamicStoriesSectionGreen from './IslamicStoriesSectionGreen';
export default function IslamicStoriesSection(props) {

    const { theme } = useTheme();
      switch (theme) {
                case "white":
                  return <IslamicStoriesSectionWhite {...props} />;
            
                case "blue":
                  return <IslamicStoriesSectionBlue {...props} />;
                  case "green":
                  return <IslamicStoriesSectionGreen {...props} />;
               }
}