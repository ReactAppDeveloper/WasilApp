import React from 'react';
import RakatTabs from '../../RakatTabs';
import {IshaFirst4FarzBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';
import ThirdRakat from './ThirdRakat';
import FourthRakat from './FourthRakat';

const RAKATS = [FirstRakat, SecondRakat, ThirdRakat, FourthRakat];

export default function IshaFirst4Farz() {
  return <RakatTabs Banner={IshaFirst4FarzBanner} rakats={RAKATS} />;
}
