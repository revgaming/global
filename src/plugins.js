String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
String.prototype.slug = function () {
  return this.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}
