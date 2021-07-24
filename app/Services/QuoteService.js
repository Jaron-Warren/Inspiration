import { ProxyState } from "../AppState.js";
import { sandBox } from "./AxiosService.js";

class QuoteService {
  async getQuote() {
    let res = await sandBox.get('quotes')
    // console.log(res.data)
    ProxyState.quote = res.data
  }

}

export const quoteService = new QuoteService();

