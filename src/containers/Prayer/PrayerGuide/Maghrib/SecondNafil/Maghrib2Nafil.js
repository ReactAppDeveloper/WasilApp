import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Maghrib2NafilBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Maghrib2Nafil() {
  return <RakatTabs Banner={Maghrib2NafilBanner} rakats={RAKATS} />;
}
