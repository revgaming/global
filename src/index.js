import {loader, loadStringPlugins} from '@revgaming/helpers'
import {bootLanguages} from '@revgaming/languages'
import {bootConfig} from '@revgaming/config'
import {bootCurrencies} from '@revgaming/currencies'
import {bootLocation} from '@revgaming/location'
import {bootAppearance} from '@revgaming/appearance'
import {isMuted} from '@revgaming/media'

export default function (opts = {}) {
  loadStringPlugins()
  bootConfig(opts)
  return loader({})
    .load(bootLanguages(opts))
    .load(bootLocation(opts))
    .load(bootCurrencies(opts))
    .load(bootAppearance(opts))
    .load(isMuted)
}
