import axios from 'axios'

export const getAllShops() => {
  return {
    type: GET_ALL_SHOPS,
    payload: axios.get(``)
  }
}
