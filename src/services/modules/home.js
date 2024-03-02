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

export function getHomeDiscountData() {
  return instanceRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return instanceRequest.get({
    url: '/home/hotrecommenddest'
  })
}