import React from 'react';
import RakatTabs from '../../RakatTabs';
import {MaghribFarzBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';
import ThirdRakat from './ThirdRakat';

const RAKATS = [FirstRakat, SecondRakat, ThirdRakat];

export default function MaghribFarz() {
  return <RakatTabs Banner={MaghribFarzBanner} rakats={RAKATS} />;
}
