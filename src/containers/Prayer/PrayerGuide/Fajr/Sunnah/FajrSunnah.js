import React from 'react';
import RakatTabs from '../../RakatTabs';
import {FajrSunnahBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function FajrSunnah() {
  return <RakatTabs Banner={FajrSunnahBanner} rakats={RAKATS} />;
}
