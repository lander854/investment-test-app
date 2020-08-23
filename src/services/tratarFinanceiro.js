export function mascaraFinanceira(input) {
  console.log(input);
  let valueParsed = '' + input.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return valueParsed;
}
