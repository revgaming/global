import {loader} from '@revgaming/helpers'
import {bootConfig} from '@revgaming/config'
import {bootLanguages} from '@revgaming/languages'
import {bootLocation} from '@revgaming/location'
import {bootCurrencies} from '@revgaming/currencies'
import {bootAppearance} from '@revgaming/appearance'
import {bootDevice} from '@revgaming/device'
import {bootMedia} from '@revgaming/media'
import {bootSession} from '@revgaming/session'
export default function (opts = {}) {
  require('./plugins')
  return loader()
    .load(bootConfig(opts.config))
    .load(bootLanguages(opts.languages))
    .load(bootLocation(opts.location))
    .load(bootCurrencies(opts.currencies))
    .load(bootAppearance(opts.appearance))
    .load(bootDevice(opts.device))
    .load(bootTrackers(opts.trackers))
    .load(bootMedia(opts.media))
    .load(bootSession(opts.session))
}
