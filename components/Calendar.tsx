import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Helper function to get the week number of the year
const getWeekNumber = (date: Date): number => {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + startDate.getDay() + 1) / 7);
};

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const currentWeek = getWeekNumber(today);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{currentMonth} {currentYear}</Text>
      <Text style={styles.week}>Week: {currentWeek}</Text>
      {/* Add more calendar functionalities here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  week: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Calendar;
