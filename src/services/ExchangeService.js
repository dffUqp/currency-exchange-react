import axios from '../plugins/axios';

export default class ExchangeService {
  static async getCurrenciesEur() {
    return await axios({
      method: 'GET',
      url: 'latest/currencies/eur.json',
    });
  }

  static async getCurrenciesUsd() {
    return await axios({
      method: 'GET',
      url: 'latest/currencies/usd.json',
    });
  }
}
