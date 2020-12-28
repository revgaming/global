import {loader, loadStringPlugins} from '@revgaming/helpers'
import {globalizeConfig, mergeConfigs} from '@revgaming/config'
import languages from '@revgaming/languages'
import currencies from '@revgaming/currencies'
import location from '@revgaming/location'
import appearance from '@revgaming/appearance'
import media from '@revgaming/media'
import init from './mixins/init'

export default function (opts = {}) {
  loadStringPlugins()
  if (opts.hasOwnProperty('configs')) mergeConfigs(opts.configs)
  globalizeConfig('config')
  return loader({})
    .load(mergeConfigs)
    .load(
      languages({
        locale: opts.hasOwnProperty('locale') ? opts.locale : 'detect', // to by-pass detection
        default_priority: opts.default_priority === true, // if app.locale (default) seen in browser lang list, dont try to set others.
        fallback_priority: opts.fallback_priority === true,
        unsupported: opts.hasOwnProperty('unsupported_locale')
          ? opts.unsupported
          : null,
        global: opts.hasOwnProperty('lang_global') ? opts.lang_global : '__', //  to globalize lang  lang//__
        translations: typeof opts.hasOwnProperty('translations')
          ? opts.translations
          : {},
      }),
    )
    .load(appearance())
    .load(location())
    .load(currencies())
    .load(media())
    .load(init)
    .init()
}
