import React from 'react';
import { useTheme } from '../../theme';

import HomeNewBlue from './HomeNewBlue';
import HomeNewWhite from './HomeNewWhite';
import HomeNewGreen from './HomeNewGreen';

export default function HomeNew(props) {
    const { theme } = useTheme();

   switch (theme) {
    case "white":
      return <HomeNewWhite {...props} />;

    case "blue":
      return <HomeNewBlue {...props} />;

      case "green":
      return <HomeNewGreen {...props} />;
   }
}