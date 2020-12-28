import Preference from '@revgaming/preference'

const detectCurrencyCode = function (App) {
  if (!App.setCurrencyCode(Preference.get('currency')))
    App.setCurrencyCode(
      process.env.APP_LOCALE === config('app.locale')
        ? config('app.currency')
        : config('app.fallback_currency'),
    )
}

export default {
  getCountryName: function () {
    const country = this.country()
    if (country) return country[this.locale()]
  },
  init: function () {
    detectCurrencyCode(this)
    return this
  },
}
