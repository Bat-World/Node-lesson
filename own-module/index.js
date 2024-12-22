function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'C' && toUnit === 'F') {
      return (value * 9) / 5 + 32; 
    } else if (fromUnit === 'F' && toUnit === 'C') {
      return ((value - 32) * 5) / 9; 
    } else if (fromUnit === 'C' && toUnit === 'K') {
      return value + 273.15; 
    } else if (fromUnit === 'K' && toUnit === 'C') {
      return value - 273.15; 
    } else {
      throw new Error('Invalid conversion units');
    }
  }
  
  export default convertTemperature; 
  
