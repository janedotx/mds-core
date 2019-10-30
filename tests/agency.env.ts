import { gitHash } from './environment'

const dockerComposeConfig = {
  // fixme: get commit hash from env
  commit: '5e391c9',
  serverHeader: undefined
}

const kubernetesConfig = {
  commit: gitHash(),
  serverHeader: 'istio-envoy'
}

export { dockerComposeConfig, kubernetesConfig }
