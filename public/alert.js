function isValidValue(str) {
  return typeof str === "string" && str.length >= 1 && str.length <= 255
}
