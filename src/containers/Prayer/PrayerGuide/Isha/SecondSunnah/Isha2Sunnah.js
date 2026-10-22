import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Isha2SunnahBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Isha2Sunnah() {
  return <RakatTabs Banner={Isha2SunnahBanner} rakats={RAKATS} />;
}
