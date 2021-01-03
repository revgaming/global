import {loader} from '@revgaming/helpers'
import {bootLanguages} from '@revgaming/languages'
import {bootConfig, mergeConfig} from '@revgaming/config'
import {bootCurrencies} from '@revgaming/currencies'
import {bootLocation} from '@revgaming/location'
import {bootAppearance} from '@revgaming/appearance'
import {bootDevice} from '@revgaming/device'
import {bootMedia, isMuted} from '@revgaming/media'
import {bootSession} from '@revgaming/session'

export default function (opts = {}) {
  require('./plugins')
  bootConfig(opts.config)
  return loader()
    .load(mergeConfig)
    .load(bootLanguages(opts.languages))
    .load(bootLocation(opts.location))
    .load(bootCurrencies(opts.currencies))
    .load(bootAppearance(opts.appearance))
    .load(bootDevice(opts.device))
    .load(bootMedia(opts.media))
    .load(bootSession(opts.session))
}
