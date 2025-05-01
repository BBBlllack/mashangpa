require("./env")
require("./loader")


const time = new Date().getTime()

function getM(page){

}

async function loadPage(page){
    const res = await fetch('https://www.mashangpa.com/api/problem-detail/18/data/?page=2', {
  headers: {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'cache-control': 'no-cache',
    'client-version': '1.0.0',
    'm': getM(page),
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.mashangpa.com/problem-detail/18/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'timestamp': time,
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'cookie': 'sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745904826,1745936534,1745979788; HMACCOUNT=05D2AEE5364F4A63; v=QTY3czl0dDdTb2c4UXI1dkQxZFNJUkpEX3c5MXIxel9oR29tamRoM0c2aHY2MEF4UURfQ3VWUURkcW1yMTc0NjAxMjA4MDA4NQ==; s=51b351b351b351b370b0d0905010f07030717130b0; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1746025205; _nano_fp=XpmYn59xnpPonpXYlT_8x99QHKo0GFFXnJIualXc'
  }
});
    return res.json()
}

!(async function (){
    for (let i = 1; i < 21; i++) {
        const data = await loadPage(i)
        console.log(data)
        break
    }
})()