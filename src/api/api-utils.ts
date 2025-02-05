import _ from 'lodash'
import axios from 'axios'
import {useContextStore} from '@/stores/context'

export default {
  apiBaseUrl: () => import.meta.env.VITE_APP_API_BASE_URL,
  get: (path: string, redirectOnError?: boolean) => {

    return axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`).then(

        data => data
    )
  },
  post: (path: string, data={}, redirectOnError?: boolean) => {
    return axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`, data).then(
      data => data
    )
  },

}
