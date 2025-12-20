function confirmEnding(string, ending) {
  const slice_ending = string.slice(-ending.length);

  return slice_ending === ending;
}