import React from 'react';
import RakatTabs from '../../RakatTabs';
import {Isha2NafilBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function Isha2Nafil() {
  return <RakatTabs Banner={Isha2NafilBanner} rakats={RAKATS} />;
}
