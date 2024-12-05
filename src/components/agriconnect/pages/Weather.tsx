import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type WeatherData = {
  region: string;
  temperature: number[]; // Daily temperature for a week
  rainfall: number[]; // Daily rainfall for a week
  description: string; // Brief explanation for the forecast
};

const WeatherModule: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>('Harare');
  const [cropRecommendations, setCropRecommendations] = useState<string[]>([]);
  const [forecastType, setForecastType] = useState<'daily' | 'monthly' | 'seasonal'>('daily');

  const provinces = [
    'Harare',
    'Bulawayo',
    'Masvingo',
    'Midlands',
    'Manicaland',
    'Mashonaland West',
    'Mashonaland East',
    'Mashonaland Central',
    'Matabeleland South',
    'Matabeleland North',
  ];

  const fetchWeatherData = async () => {
    try {
      const fetchedData: WeatherData[] = (
        await Promise.all(
          provinces.map(async (province) => {
            try {
              const response = await axios.get(
                `http://localhost:8080/api/weather/${province}` // Connects to Java backend
              );
              const dailyData = response.data?.daily || [];
              const temperature = dailyData.map((day: any) => day.temp?.day || 0);
              const rainfall = dailyData.map((day: any) => day.rain || 0);

              return {
                region: province,
                temperature,
                rainfall,
                description:
                  response.data?.current?.weather?.[0]?.description || 'No description available',
              };
            } catch (error) {
              console.error(`Error fetching data for ${province}:`, error);
              return null;
            }
          })
        )
      ).filter((data): data is WeatherData => data !== null);

      setWeatherData(fetchedData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getCropRecommendations = (averageRainfall: number, isMonthly: boolean): string[] => {
    if (isMonthly) {
      return averageRainfall > 50 ? ['Maize', 'Rice'] : ['Sorghum', 'Millet'];
    }
    return averageRainfall > 30 ? ['Wheat', 'Barley'] : ['Cassava', 'Sweet Potatoes'];
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const selectedProvinceData = weatherData.find((data) => data.region === selectedProvince);
    if (selectedProvinceData) {
      const totalRainfall = selectedProvinceData.rainfall.reduce((acc, curr) => acc + curr, 0);
      const averageRainfall = totalRainfall / selectedProvinceData.rainfall.length;
      const crops = getCropRecommendations(averageRainfall, forecastType === 'monthly');
      setCropRecommendations(crops);
    }
  }, [selectedProvince, weatherData, forecastType]);

  const selectedProvinceData = weatherData.find((data) => data.region === selectedProvince);
  const temperatureData = selectedProvinceData?.temperature || [];
  const rainfallData = selectedProvinceData?.rainfall || [];
  const description = selectedProvinceData?.description || 'No data available for this region';

  const chartLabels =
    forecastType === 'daily'
      ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
      : forecastType === 'monthly'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      : ['Season 1', 'Season 2', 'Season 3'];

  const temperatureChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatureData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const rainfallChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: rainfallData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Weather Forecast & Crop Recommendations
      </h2>

      <div className="my-6 text-center">
        <select
          className="border-2 border-green-700 rounded px-4 py-2"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      <div className="my-6 text-center">
        <select
          className="border-2 border-green-700 rounded px-4 py-2"
          value={forecastType}
          onChange={(e) => setForecastType(e.target.value as 'daily' | 'monthly' | 'seasonal')}
        >
          <option value="daily">Daily Forecast</option>
          <option value="monthly">Monthly Forecast</option>
          <option value="seasonal">Seasonal Forecast</option>
        </select>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center text-green-700">
          Temperature Trends ({forecastType})
        </h3>
        <div className="mt-4">
          <Line data={temperatureChartData} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center text-green-700">
          Rainfall Trends ({forecastType})
        </h3>
        <div className="mt-4">
          <Line data={rainfallChartData} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center text-green-700">Weather Description</h3>
        <p className="text-center mt-4">{description}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center text-green-700">
          Crop Recommendations
        </h3>
        <ul className="mt-4 list-disc list-inside text-center">
          {cropRecommendations.map((crop, index) => (
            <li key={index}>{crop}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherModule;
