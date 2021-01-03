import {loader} from '@revgaming/helpers'
import {bootLanguages} from '@revgaming/languages'
import {bootConfig, mergeConfig} from '@revgaming/config'
import {bootCurrencies} from '@revgaming/currencies'
import {bootLocation} from '@revgaming/location'
import {bootAppearance} from '@revgaming/appearance'
import {bootDevice} from '@revgaming/device'
import {bootMedia, isMuted} from '@revgaming/media'

export default function (opts = {}) {
  require('./plugins')
  bootConfig(opts.config)
  return loader()
    .load(mergeConfig)
    .load(bootLanguages(opts.languages))
    .load(bootLocation(opts.timezone))
    .load(bootCurrencies(opts.currencies))
    .load(bootAppearance(opts.darkClass ?? 'dark'))
    .load(bootDevice())
    .load(bootMedia(opts.media))
}
