export default  (number) => {
  if (
    number.split('').filter(el =>
      el === '('
      ||
      el === ')'
      ||
      el === '-'
      ||
      el === '0'
      ||
      el === '1'
      ||
      el === '2'
      ||
      el === '3'
      ||
      el === '4'
      ||
      el === '5'
      ||
      el === '6'
      ||
      el === '7'
      ||
      el === '8'
      ||
      el === '9'
    ).length === number.length
  ) {
    return true
  } else {
    return false
  }
}