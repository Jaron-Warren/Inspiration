import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js"

//Private
function _drawQuote() {
  document.getElementById("quote").innerText = ProxyState.quote.content
  document.getElementById("quoteauthor").innerText = `- ${ProxyState.quote.author}`
}

//Public
export default class QuoteController {
  constructor() {
    this.getQuote()

    ProxyState.on("quote", _drawQuote);

  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error('problem getting Quote ' + error)
    }
  }

}
