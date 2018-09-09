export function filterCharacters(arr, str) {
  if (!str) {
    return arr;
  }
  return arr.filter(elem => {
    let name = elem.name.toLowerCase();
    str = str.toLowerCase();
    return (name.indexOf(str) !== -1);
  });
}
