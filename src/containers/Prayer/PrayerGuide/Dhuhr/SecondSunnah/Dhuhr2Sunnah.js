import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Dhuhr2SunnahBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Dhuhr2Sunnah() {
  return <RakatTabs Banner={Dhuhr2SunnahBanner} rakats={RAKATS} />;
}
