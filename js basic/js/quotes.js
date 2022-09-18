const quotes = [
    {quote:"궁시렁궁시렁1",
author: '최주희1',},
{quote:"궁시렁궁시렁2",
author: '최주희2',},
{quote:"궁시렁궁시렁3",
author: '최주희3',},
{quote:"궁시렁궁시렁4",
author: '최주희4',},
{quote:"궁시렁궁시렁5",
author: '최주희5',},
{quote:"궁시렁궁시렁6",
author: '최주희6',},
{quote:"궁시렁궁시렁7",
author: '최주희7',},
{quote:"궁시렁궁시렁8",
author: '최주희8',},
{quote:"궁시렁궁시렁9",
author: '최주희9',},
{quote:"궁시렁궁시렁10",
author: '최주희10',},

]
const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')
// 1. array 안에 있는 element에 어떻게 접근하느냐
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
// 만약 명언이 소수가 아니라면? array의 길이를 알고 있어야한다.

// math.random()->소수(float)랜덤으로 추출
// math.round()-> 반올림
// math.ceil()-> 숫자를 천장위로 올린다 ex) 1.1 -> 2
// math.floor()-> 숫자를 바닥으로 내린다
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;