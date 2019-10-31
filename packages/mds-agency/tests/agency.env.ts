import { gitHash } from 'tests/environment.ts'

const dockerComposeConfig = {
  // fixme: get commit hash from env
  commit: '5e391c9',
  serverHeader: 'nginx/1.16.1',
  host_url: 'http://localhost'
}

const kubernetesConfig = {
  commit: gitHash(),
  serverHeader: 'istio-envoy',
  host_url: 'http://localhost'
}

export { dockerComposeConfig, kubernetesConfig }
