import global from '@revgaming/global'

export default global({
  config: {app: {name: 'test'}},
  languages: {translations: {tr: {messages: {welcome: 'Hoşgeldiniz'}}}},
  appearance: {},
  location: {},
  currencies: {
    accepted: ['try', 'usd', 'eur'],
  },
  media: {
    publicPath: '/audio/',
  },
  identity: {
    key: 'identity',
    hooks: {
      agents: {},
      identities: {},
    },
  },
  session: {
    token: {},
    sync: {},
    xhr: {
      config: {
        baseURL: process.env.API_URL,
        withCredentials: true,
        timeout: 5000,
        headers: {},
      },
      xmlHttp: true,
      csrf: true,
      token: true,
      identity: 'Device',
      // identities: {
      //  identity: 'Device',
      //   signature: {},
      // },
      // identities: [{identity:'Device'},'created']
    },
    auth: {
      login: 'auth/login',
      logout: 'auth/logout',
    },
  },
})
