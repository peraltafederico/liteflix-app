import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { cloudinaryBaseUrl, cloudinaryCloudName } = publicRuntimeConfig

const api = axios.create({
  baseURL: `${cloudinaryBaseUrl}/v1_1/${cloudinaryCloudName}`,
})

export default api
