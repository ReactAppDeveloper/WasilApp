import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMonthlyCalendar = async (year, month) => {
  try {
    const lat = (await AsyncStorage.getItem('ONLATI')) || '24.8607';
    const lon = (await AsyncStorage.getItem('ONLONGI')) || '67.0011';

    const res = await axios.get(
      `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${lat}&longitude=${lon}&method=2`
    );

    return res.data.data;
  } catch (error) {
    console.log('API Error:', error);
    return [];
  }
};