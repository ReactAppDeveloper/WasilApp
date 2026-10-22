import React from 'react';
import RakatTabs from '../../RakatTabs';
import {IshaWitrBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';
import ThirdRakat from './ThirdRakat';

const RAKATS = [FirstRakat, SecondRakat, ThirdRakat];

export default function IshaWitr() {
  return <RakatTabs Banner={IshaWitrBanner} rakats={RAKATS} />;
}
