import axios from '../plugins/axios';

export default class ExchangeService {
  static async getCurrenciesEur() {
    return await axios({
      method: 'GET',
      url: 'latest/currencies/eur.json',
    });
  }
}
