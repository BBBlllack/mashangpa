const DES3 = require("./19pro.js")

var problemId = 19;
var headers = {
    "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "referer": "https://www.mashangpa.com/problem-detail/19/",
    "cookie": "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745904826; HMACCOUNT=F4C4588BDF5FAF81; sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1745913958"
}
var s = 0
async function loadPage(pageNumber) {
    const params = {
        page: pageNumber,
    };
    const queryString = new URLSearchParams(params).toString();
    var res = await fetch(`https://www.mashangpa.com/api/problem-detail/${problemId}/data/?${queryString}`,{
        headers: headers
    });
    var data = res.json()
    return data;
    // return JSON.parse(DES3.decrypt(data.r,data.k))
}

(async function () {
    for (let i = 1; i < 21; i++) {
        const data = await loadPage(i)
        const r = JSON.parse(DES3.decrypt(data.r,data.k))
        r.current_array.forEach(e=>{
            s += e
        })
    }
    console.log(s)
})();
