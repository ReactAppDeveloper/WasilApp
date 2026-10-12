
export const formatCalendarData = (data) => {
  if (!data || data.length === 0) return [];

  const formatted = data.map(item => ({
    gregorianDate: item.date.gregorian.date,
    day: parseInt(item.date.gregorian.day),
    weekday: item.date.gregorian.weekday.en,

    hijriDate: parseInt(item.date.hijri.day),
    hijriMonth: item.date.hijri.month.en,
    hijriMonthNumber: item.date.hijri.month.number,
    hijriYear: item.date.hijri.year,
  }));

  const weekMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const firstWeekday = formatted?.[0]?.weekday;

  const emptySlots =
    weekMap[firstWeekday] !== undefined ? weekMap[firstWeekday] : 0;

  const padded = [];

  for (let i = 0; i < emptySlots; i++) {
    padded.push({
      empty: true,
      id: `empty-${i}`,
    });
  }

  return [...padded, ...formatted];
};

export const isToday = (dateStr) => {
  if (!dateStr) return false;

  const parts = dateStr.split('-');

  if (parts.length !== 3) return false;

  const [day, month, year] = parts.map(Number);

  if (!day || !month || !year) return false;

  const target = new Date(year, month - 1, day);
  const today = new Date();

  return (
    target.getDate() === today.getDate() &&
    target.getMonth() === today.getMonth() &&
    target.getFullYear() === today.getFullYear()
  );
};

export const isFriday = (weekday) => {
  return weekday?.toLowerCase() === 'friday';
};

export const getIslamicEvent = (hijriDay, hijriMonth) => {
  if (!hijriDay || !hijriMonth) return null;

  if (hijriMonth === 9) return 'Ramadan';

  if (hijriDay === 1 && hijriMonth === 10) return 'Eid ul Fitr';

  if (hijriDay === 10 && hijriMonth === 12) return 'Eid ul Adha';

  return null;
};
export const getGregorianMonthName = (monthNumber) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return months[monthNumber - 1] || '';
};