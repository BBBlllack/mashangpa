const bms = 'split'
const yms = 'slice'
const $ms = 'fromCharCode'
const Fms = 'charCodeAt'
const Ims = 'length'
const Mms = 'concat'
const rms = 'join'
const Cms = 'from'
const _ms = 'toString'
const zms = 'map'
const Ums = 'padStart'

function OOOoOo(_0x240504, _0x8eefdc) {
    _0x8eefdc = _0x8eefdc + ''
  const _0x3a3671 = _0x240504.split(''),
        _0x1959d4 = _0x8eefdc.split(''),
        _0x582226 = 4;

  let _0x5ad857 = [];

  for (let _0x2d33d3 = 0; _0x2d33d3 < _0x3a3671[Ims]; _0x2d33d3 += _0x582226) {
    let _0x38ae5f = _0x3a3671[yms](_0x2d33d3, _0x2d33d3 + _0x582226);

    for (let _0x31873b = 0; _0x31873b < _0x38ae5f[Ims]; _0x31873b++) {
      const _0x11057a = _0x38ae5f[_0x31873b][Fms](0),
            _0x1a6269 = _0x1959d4[_0x31873b % _0x1959d4[Ims]][Fms](0),
            _0x25c979 = (_0x11057a + _0x1a6269) % 256;

      _0x38ae5f[_0x31873b] = String[$ms](_0x25c979);
    }

    _0x5ad857 = _0x5ad857[Mms](_0x38ae5f);
  }

  const _0x28d8b9 = _0x5ad857[rms](''),
        _0x36bdd2 = Array[Cms](_0x28d8b9)[zms](_0x3c7e7a => _0x3c7e7a[Fms](0)[_ms](16)[Ums](2, "0"))[rms]('');

  return _0x36bdd2;
}

function encrypt(v1 ,v2){
    return OOOoOo(v1, v2)
}

function getToken(page){
    const sms = "oooooo"
    var time = new Date()['getTime']();
    const data = {
        "m": encrypt(sms + time + page, sms),
        "t": btoa(time)
    }
    console.log("token====> ", data)
    return data;
}

async function loadPage(page) {
    var res = await fetch('https://www.mashangpa.com/api/problem-detail/8/data/', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'origin': 'https://www.mashangpa.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://www.mashangpa.com/problem-detail/8/',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'cookie': 'sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745904826,1745936534,1745979788; HMACCOUNT=05D2AEE5364F4A63; v=QTY3czl0dDdTb2c4UXI1dkQxZFNJUkpEX3c5MXIxel9oR29tamRoM0c2aHY2MEF4UURfQ3VWUURkcW1yMTc0NjAxMjA4MDA4NQ==; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1746012254; s=51b351b351b351b370b0d090507010303030903070',
            ...getToken(page)
        },
        body: JSON.stringify({
            'page': page
        })
    });
    return res.json()
}

var s = 0;
!(async function (){
    for (let i = 1; i < 21; i++) {
        const data = await loadPage(i);
        data.current_array.forEach(e => {
            s += e
        })
    }
    console.log(s)
})()
