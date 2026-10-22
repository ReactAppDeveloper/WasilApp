import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Maghrib2SunnahBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Maghrib2Sunnah() {
  return <RakatTabs Banner={Maghrib2SunnahBanner} rakats={RAKATS} />;
}
