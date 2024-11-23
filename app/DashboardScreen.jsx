import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  // Data for visualizations
  const [moodData, setMoodData] = useState([50, 60, 70, 80, 75, 90]);
  const [waterIntakeData, setWaterIntakeData] = useState([2, 4, 6, 5, 3, 7]);
  const [sleepData, setSleepData] = useState([6, 7, 8, 7.5, 6.5, 7]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Visualization Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mood Over Time</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: moodData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Water Intake (Cups)</Text>
        <BarChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: waterIntakeData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sleep Quality (Hours)</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: sleepData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0, // No decimal places
  color: (opacity = 1) => `rgba(81, 21, 140, ${opacity})`, // Primary color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#51158c',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
});

export default DashboardScreen;
