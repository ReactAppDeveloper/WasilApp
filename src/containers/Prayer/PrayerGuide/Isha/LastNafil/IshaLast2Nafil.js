import React from 'react';
import RakatTabs from '../../RakatTabs';
import {IshaLast2NafilBanner} from '../../../../../assets/icons/themed';
import FirstRakat from './FirstRakat';
import SecondRakat from './SecondRakat';

const RAKATS = [FirstRakat, SecondRakat];

export default function IshaLast2Nafil() {
  return <RakatTabs Banner={IshaLast2NafilBanner} rakats={RAKATS} />;
}
