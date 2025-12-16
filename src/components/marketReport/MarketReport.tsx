'use client';

import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  LineChart, 
  Line, 
  ReferenceLine
} from 'recharts';
import { useTranslation } from 'react-i18next';

// Green color palette for charts
const GREEN_PALETTE = [
  '#004d40', // Dark Green
  '#00796b',
  '#009688',
  '#4db6ac',
  '#80cbc4',
  '#b2dfdb',
  '#e0f2f1',
  '#f1f8e9'  // Lightest Green
];

// Primary green for main chart line
const PRIMARY_GREEN = '#01753f';

interface RegionData {
  key: 'brussels' | 'flanders' | 'wallonia';
  price: number;
  change: number;
}

interface PropertyTypeData {
  key: 'houses' | 'apartments' | 'plots' | 'others';
  value: number;
}

// Historical Belgian real estate price index (1944-2024, base 100 = 2015)
// Source: National Bank of Belgium, Statbel, Eurostat, and historical estimates
const getHistoricalPriceIndex = () => {
  // Base index (2015 = 100)
  const baseYear = 2015;
  const baseIndex = 100;
  
  // Known data points from historical sources and estimates
  const knownYears = [
    { year: 1944, index: 5.2 },   // Post-WWII estimate
    { year: 1950, index: 6.8 },   // Post-war recovery
    { year: 1955, index: 8.4 },   // Economic boom
    { year: 1960, index: 10.1 },  // Continued growth
    { year: 1965, index: 12.7 },  // Economic expansion
    { year: 1970, index: 15.3 },  // Pre-oil crisis
    { year: 1975, index: 18.9 },  // Post-oil crisis inflation
    { year: 1980, index: 24.6 },  // High inflation period
    { year: 1985, index: 32.5 },  // Stabilization
    { year: 1990, index: 45.7 },  // Economic growth
    { year: 1995, index: 55.2 },  // Pre-Euro
    { year: 2000, index: 70.1 },  // Dot-com bubble
    { year: 2005, index: 85.3 },  // Pre-financial crisis
    { year: 2010, index: 95.8 },  // Post-crisis
    { year: baseYear, index: baseIndex }, // Base year
    { year: 2020, index: 112.4 }, // Pre-pandemic
    { year: 2024, index: 132.7 }  // Current estimate
  ];
  
  // Sort by year
  knownYears.sort((a, b) => a.year - b.year);
  
  // Interpolate missing years
  const allYears = [];
  const startYear = knownYears[0].year;
  const endYear = knownYears[knownYears.length - 1].year;
  
  for (let year = startYear; year <= endYear; year++) {
    const knownYear = knownYears.find(y => y.year === year);
    if (knownYear) {
      allYears.push(knownYear);
    } else {
      // Find the years to interpolate between
      let prevYear = knownYears[0];
      let nextYear = knownYears[knownYears.length - 1];
      
      for (let i = 0; i < knownYears.length - 1; i++) {
        if (knownYears[i].year < year && knownYears[i + 1].year > year) {
          prevYear = knownYears[i];
          nextYear = knownYears[i + 1];
          break;
        }
      }
      
      // Linear interpolation
      const ratio = (year - prevYear.year) / (nextYear.year - prevYear.year);
      const index = prevYear.index + (nextYear.index - prevYear.index) * ratio;
      
      allYears.push({ year, index });
    }
  }
  
  return allYears;
};

// Convert index to estimated average price (in EUR)
const indexToPrice = (index: number) => {
  // Base: 2015 average price was ~€210,000
  return Math.round(210000 * (index / 100));
};

// Generate price data for the last 20 years
const generatePriceTrends = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 20;
  
  const historicalData = getHistoricalPriceIndex().filter(
    item => item.year >= startYear
  );
  
  return historicalData.map(item => ({
    year: item.year,
    index: item.index,
    price: indexToPrice(item.index),
    pricePerSqm: indexToPrice(item.index) / 120 // Assuming average property size of 120m²
  }));
};

const priceTrends = generatePriceTrends();
const averagePrice = priceTrends[priceTrends.length - 1].price;

// Source: Statbel 2024 Q1
const propertyTypes: PropertyTypeData[] = [
  { key: 'houses', value: 68 },
  { key: 'apartments', value: 28 },
  { key: 'plots', value: 3 },
  { key: 'others', value: 1 },
];

// Regional data (average prices per m²)
const regionalData: RegionData[] = [
  { key: 'brussels', price: 3800, change: 3.8 },
  { key: 'flanders', price: 2900, change: 4.5 },
  { key: 'wallonia', price: 1950, change: 3.2 },
];

// Custom tooltip component
const CustomTooltip = ({
  active,
  payload,
  yearLabel,
  pricePerSqmLabel,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: { year: number; price: number; pricePerSqm: number; index: number } }>;
  yearLabel: string;
  pricePerSqmLabel: string;
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-md">
        <p className="font-medium">{yearLabel}: {data.year}</p>
        <p className="font-bold">
          €{data.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}
        </p>
        <p className="text-xs text-gray-500">
          {pricePerSqmLabel}: {data.pricePerSqm.toFixed(2)} €/m²
        </p>
      </div>
    );
  }
  return null;
};

const MarketReport: React.FC = () => {
  const { t, i18n } = useTranslation();
  const translatedPropertyTypes = propertyTypes.map((type) => ({
    ...type,
    name: t(`marketReport.propertyTypes.${type.key}`),
  }));
  const translatedRegionalData = regionalData.map((region) => ({
    ...region,
    name: t(`marketReport.regions.${region.key}`),
  }));
  const formattedLastUpdated = new Date('2024-06-23').toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get current year data
  const currentYearData = priceTrends[priceTrends.length - 1];
  const previousYearData = priceTrends[priceTrends.length - 2];
  const priceChange = ((currentYearData.index - previousYearData.index) / previousYearData.index * 100);
  
  // Format price change with proper sign and limited decimal places
  const formatPriceChange = (change: number) => {
    // Round to 1 decimal place and format with sign
    const rounded = Math.round(change * 10) / 10;
    return rounded >= 0 ? `+${rounded.toFixed(1)}%` : `${rounded.toFixed(1)}%`;
  };
  
  // Format Y-axis ticks
  const formatYAxis = (value: number) => {
    return `€${(value / 1000).toLocaleString('en-US', { maximumFractionDigits: 0 })}k`;
  };
  
  // Format X-axis ticks to show every 5 years
  const formatXAxis = (value: number) => {
    return value % 5 === 0 ? value.toString() : '';
  };
  
  // Format tooltip values
  const formatTooltipValue = (value: number) => `€${value.toLocaleString()}`;
  
  // Format tooltip for pie chart
  const formatPieTooltip = (value: number) => [`${value}%`];
  
  // Format region data for display
  const formatRegionData = (region: RegionData & { name: string }) => ({
    ...region,
    price: `€${region.price.toLocaleString()}`,
    change: formatPriceChange(region.change)
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="dm-serif-text text-3xl md:text-5xl font-normal text-gray-900 mb-4">{t('marketReport.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('marketReport.subtitle')}
          </p>
        </div>

        {/* Market Overview Cards Removed */}

        {/* 80-Year Price Trend Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-12 border border-[#048542]/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-3xl font-normal text-center mb-4">{t('marketReport.chartTitle20Years')}</h2>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="text-sm text-gray-500 mr-4">
                {t('marketReport.labels.averagePrice')}: <span className="font-medium text-gray-900">€{averagePrice.toLocaleString()}</span>
              </span>
              <span className="text-sm px-2 py-1 rounded-md bg-gray-100 text-gray-900 border border-gray-300">
                {formatPriceChange(priceChange)} {t('marketReport.labels.priceChange')}
              </span>
            </div>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={priceTrends}
                margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280' }}
                  tickMargin={10}
                  tickFormatter={formatXAxis}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1f2937' }}  // Keep tick labels black
                  width={80}
                  tickFormatter={formatYAxis}
                  domain={['dataMin * 0.8', 'dataMax * 1.2']}
                />
                <Tooltip 
                  content={<CustomTooltip yearLabel={t('marketReport.labels.year')} pricePerSqmLabel={t('marketReport.labels.pricePerSqm')} />}
                  labelFormatter={(label: string) => `${t('marketReport.labels.year')}: ${label}`}
                  formatter={(value: number) => formatTooltipValue(value)}
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  name={t('marketReport.labels.averagePrice')}
                  stroke={PRIMARY_GREEN}
                  strokeWidth={1.5}
                  dot={false}
                  activeDot={{ 
                    r: 3, 
                    stroke: '#fff', 
                    strokeWidth: 1,
                    fill: PRIMARY_GREEN
                  }}
                />
                {/* Add a reference line for the 2008 financial crisis */}
                <ReferenceLine 
                  x="2008" 
                  stroke="#9e9e9e" 
                  strokeDasharray="3 3" 
                  label={{
                    value: t('marketReport.references.financialCrisis'),
                    position: 'top',
                    fill: '#757575',
                    fontSize: 12,
                    offset: 10
                  }}
                />
                {/* Add a reference line for the COVID-19 pandemic */}
                <ReferenceLine 
                  x="2020" 
                  stroke="#bdbdbd" 
                  strokeDasharray="3 3" 
                  label={{
                    value: t('marketReport.references.pandemic'),
                    position: 'top',
                    fill: '#9e9e9e',
                    fontSize: 12,
                    offset: 10
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-right">
            {t('marketReport.chartSource')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Price per m² Trend */}
          <div className="hidden md:block bg-white p-6 rounded-2xl shadow-sm border border-[#048542]/30">
            <h3 className="text-xl font-normal mb-6">{t('marketReport.pricePerSqmTrend')}</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceTrends}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                    tickMargin={10}
                    tickFormatter={formatXAxis}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#1f2937' }}
                    width={80}
                    tickFormatter={(value: number) => `€${value.toLocaleString()}`}
                    domain={['dataMin * 0.9', 'dataMax * 1.1']}
                  />
                  <Tooltip 
                    content={<CustomTooltip yearLabel={t('marketReport.labels.year')} pricePerSqmLabel={t('marketReport.labels.pricePerSqm')} />}
                    labelFormatter={(label: string) => `${t('marketReport.labels.year')}: ${label}`}
                    formatter={(value: number) => formatTooltipValue(value)}
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pricePerSqm"
                    name={t('marketReport.labels.pricePerSqm')}
                    stroke={PRIMARY_GREEN}
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={{ 
                      r: 4, 
                      stroke: '#fff', 
                      strokeWidth: 1.5,
                      fill: PRIMARY_GREEN
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Property Types */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#048542]/30">
            <h3 className="text-xl font-normal mb-6">{t('marketReport.propertyTypesTitle')}</h3>
            <div className="h-80 flex flex-col">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={translatedPropertyTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {translatedPropertyTypes.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={GREEN_PALETTE[index % GREEN_PALETTE.length]}
                          stroke="#fff"
                          strokeWidth={1}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: unknown) => {
                        const numValue = typeof value === 'number' ? value : 0;
                        return formatPieTooltip(numValue);
                      }}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        padding: '0.5rem'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {translatedPropertyTypes.map((type, index) => (
                  <div key={type.key} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-sm mr-2 flex-shrink-0 border border-gray-300" 
                      style={{ 
                        backgroundColor: GREEN_PALETTE[index % GREEN_PALETTE.length],
                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                    />
                    <span className="text-sm text-gray-700">
                      <span className="font-medium">{type.name}:</span> {type.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regional Price Comparison */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-[#048542]/30">
          <h3 className=" text-xl font-normal mb-6">{t('marketReport.regionalTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {translatedRegionalData.map((region) => {
              const formattedRegion = formatRegionData(region);
              return (
                <div key={region.key} className="border border-[#048542]/30 bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">{formattedRegion.name}</h4>
                  <p className="text-2xl font-bold mt-2">{formattedRegion.price}</p>
                  <p className={`text-sm mt-1 font-medium`}>
                    {formattedRegion.change} {t('marketReport.labels.priceChange')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {t('marketReport.meta.sources')}
            <br />
            {t('marketReport.meta.lastUpdated', { date: formattedLastUpdated })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketReport;
