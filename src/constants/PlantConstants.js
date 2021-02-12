const someArray = [
  { label: 'Jeszcze inne coś', value: '132', size: 1 },
  { label: 'Inne', value: '333' },
  { label: 'Coś', value: '13232' },
];

const someOtherArray = [
  { label: 'Codziennie', value: '1' },
  { label: 'Co dwa dni', value: '2' },
  { label: 'Co tydzień', value: '7' },
];

export const exposureMapping = [
  { id: 'dark', value: 0 },
  { id: 'shade', value: 1 },
  { id: 'partsun', value: 2 },
  { id: 'fullsun', value: 3 },
];

export const humidityMapping = [
  { id: 'low', value: 0 },
  { id: 'medium', value: 1 },
  { id: 'high', value: 2 },
];

export const temperatureMapping = [
  { id: 'cold', value: 0 },
  { id: 'medium', value: 1 },
  { id: 'warm', value: 2 },
];

export { someArray, someOtherArray };