import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator ,StatusBar} from 'react-native';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import WeekHeader from './WeekHeader';
import { getMonthlyCalendar } from './calendarService';
import { formatCalendarData } from './calendarUtils';
import { Colors} from '../../theme';
const CalendarScreenBlue = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hijriMonthName, setHijriMonthName] = useState('');
  const [hijriYear, setHijriYear] = useState('');

 const loadCalendar = async () => {
  setLoading(true);

  const res = await getMonthlyCalendar(year, month);

  if (res && res.length > 0) {
    const firstItem = res[0];

    setHijriMonthName(firstItem.date.hijri.month.en);
    setHijriYear(firstItem.date.hijri.year);
  }

  setData(formatCalendarData(res));
  setLoading(false);
};

  useEffect(() => {
    loadCalendar();
  }, [month, year]);

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else setMonth(month + 1);
  };

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else setMonth(month - 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.intermediate1 }}>
          <StatusBar backgroundColor={Colors.intermediate1}/>
      <CalendarHeader
  month={month}
  year={year}
  hijriMonth={hijriMonthName}
  hijriYear={hijriYear}
  onNext={nextMonth}
  onPrev={prevMonth}
/>

      <WeekHeader />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CalendarGrid data={data} />
      )}
    </View>
  );
};

export default CalendarScreenBlue;