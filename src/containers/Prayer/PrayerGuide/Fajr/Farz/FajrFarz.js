import React from 'react';
import RakatTabs from '../../RakatTabs';
import {FajrFarzBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function FajrFarz() {
  return <RakatTabs Banner={FajrFarzBanner} rakats={RAKATS} />;
}
