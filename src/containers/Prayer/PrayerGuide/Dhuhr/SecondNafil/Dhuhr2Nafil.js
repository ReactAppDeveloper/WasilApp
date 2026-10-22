import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Dhuhr2NafilBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Dhuhr2Nafil() {
  return <RakatTabs Banner={Dhuhr2NafilBanner} rakats={RAKATS} />;
}
