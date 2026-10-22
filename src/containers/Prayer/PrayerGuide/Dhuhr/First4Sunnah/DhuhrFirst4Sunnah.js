import React from 'react';
import RakatTabs from '../../RakatTabs';
import {DhuhrFirst4SunnahBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';
import ThirdRakat from './ThirdRakat';
import FourthRakat from './FourthRakat';

const RAKATS = [FirstRakat, SecondRakat, ThirdRakat, FourthRakat];

export default function DhuhrFirst4Sunnah() {
  return <RakatTabs Banner={DhuhrFirst4SunnahBanner} rakats={RAKATS} />;
}
