

async function loadPage(page) {
    const p ={
  page: 1,
  t: 1746411711003,
  h5: 'MjAyNTA1MDUxMDIxNTEwMDk7OXJzYWF3Y3AzeHNkcmFwNDtiNTIxNjt0azA0dzZmZjBjNmI3NDFsTXlzeUt6TXJNall3WFJaTXBVejkxTVM3bVppQmlVREJtUUNMWlpKWkRmZ0t2TzM4bFoyLW85Mjd5VUZIM0kxSHJNRE5oNTJNblZHTTs5MThmNzE2OGFjZjE2YjQ1NGVmZWZmZGJkM2YyNjRlNjYxNGMwMDQxYzBiZmYzYTA1N2E3OGI3YzBkOTI0NTRiOzUuMDsxNzQ2NDExNzExMDA5O1dOcFpjdzVSbFpDQm5JajloTVc5MjhDQjRNeTlnUlhSZlJYOXpRWFI1eFpPM1JYUmZSWDlUb2pBM0VqODNaWFJQcDNSamhYTnJGMjg2RVRfd0FqQ2s1elI1eDJSalFYUjV4Wk8zQmpFc01rRWh3ekZzOFNMd1FYUmZSSF9xSXpfNFF5UjVaM1h0bFNSNXhKTTV4MlJwVkc4M1FYUjVaWFJQcDNSbGhITnJaMlI1eDJSb0Z5QjNaWFI1WjNYdFpXUmZSWExrUXpSNVpYUjV4Wk9vbFhSZlIzTWtRelI1WlhSNXhwNzV4MlIxZ0RBbDRDQTNaWFJQcDNSbEJXNzV0V01qaEQtQ1luTHBoWE5vWlhFTFluOWljVEFyMGpFM1ozTDNWRDhtUVhSNXhwNzs5OTE0ZWY1YzU1Zjk5ZTIzZjNjOGI2Y2FmOGIzZTYzZGE1ODk3OTgyZTMzZDUzMDBiMzViNDU2ZjUwODkyNDAwMTc0NjQxMTcxMTAwMw=='
}

    const res = await fetch("https://www.mashangpa.com/api/problem-detail/16/data/", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; v=QTY3czl0dDdTb2c4UXI1dkQxZFNJUkpEX3c5MXIxel9oR29tamRoM0c2aHY2MEF4UURfQ3VWUURkcW1yMTc0NjAxMjA4MDA4NQ==; _nano_fp=XpmYn59xnpPonpXYlT_8x99QHKo0GFFXnJIualXc; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745979788,1746068531,1746361842,1746408087; HMACCOUNT=944C19FF997F09D9; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1746408112",
            "Referer": "https://www.mashangpa.com/problem-detail/16/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify(p),
        "method": "POST"
    });
    return res.json()
}

!(async function (){
    for (let i = 1; i < 21; i++) {
        const data = await loadPage(i);
        console.log(data)
        break
    }
})()