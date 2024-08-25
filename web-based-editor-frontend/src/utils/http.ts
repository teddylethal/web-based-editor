import axios, { AxiosError, type AxiosInstance } from 'axios'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS } from './auth'
import { ErrorRespone } from 'src/types/common.type'
import { HttpErrorKeys } from 'src/constants/httpStates/httpResponeErrorKey'
import HttpStatusCode from 'src/constants/httpStates/httpStatusCode.enum'
import { HttpResponseLogs } from 'src/constants/httpStates/httpResponseLog'
import config from 'src/constants/config'

export const ApiURL = config.ApiURL
// export const ApiURL = 'http://localhost:3000/'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: ApiURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = 'Bearer ' + this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login') {
          const accessToken = response.data.data.token
          if (accessToken !== undefined) {
            this.accessToken = accessToken
            setAccessTokenToLS(accessToken)
          }
        }
        return response
      },
      function (error: AxiosError) {
        const errorResponse = error.response?.data as ErrorRespone
        const errorKey = errorResponse.error_key
        const errorLog = errorResponse.log
        if (
          (error.response?.data as ErrorRespone).status_code === HttpStatusCode.InternalServerError ||
          errorKey == HttpErrorKeys.NoPermission ||
          errorLog == HttpResponseLogs.InvalidToken
        ) {
          clearLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
