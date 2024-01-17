import instanceRequest from "../request";

export function getHomeGoodsPriceData() {
  return instanceRequest.get({
    url: '/home/goodprice'
  })
}