export default function formatValue(strings, ...values) {
  let string = '';
  for (let i = 0; i < strings.length; i += 1) {
    if (i > 0) {
      let valueString = '';
      const splittedValue = String(values[i - 1]).split('.');
      const value = splittedValue[0];
      let counter = 0;
      for (let j = value.length - 1; j >= 0; j -= 1) {
        if (counter === 3) {
          valueString = `,${valueString}`;
          counter = 0;
        }
        valueString = value[j] + valueString;
        counter += 1;
      }
      valueString += splittedValue[1] ? `.${splittedValue[1]}` : '';
      string += valueString;
    }
    string += strings[i];
  }
  return string;
}
