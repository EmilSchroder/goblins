import request from 'superagent'

export function getCardData () {
return request.get('https://api.magicthegathering.io/v1/cards?name=goblin')
}