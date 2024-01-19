import instanceRequest from "../request";

export function getHomeGoodsPriceData() {
  return instanceRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return instanceRequest.get({
    url: '/home/highscore'
  })
}

export function getDiscountData() {
  return instanceRequest.get({
    url: '/home/discount'
  })
}