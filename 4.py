import time
import requests
import hashlib

'''
function loadPage(pageNumber) {
    const timestamp = new Date().getTime()
    window.token = window.md5("tuling" + timestamp + pageNumber)
    const params = {
        page: pageNumber,
        sign: window.token,
        _ts: timestamp,
    };
    const queryString = new URLSearchParams(params).toString();
    fetch(`/api/problem-detail/${problemId}/data/?${queryString}`)
        .then(response => response.json())
        .then(data => updatePageContent(data))
        .catch(error => console.error('Error fetching problem details:', error));
}
'''

HEAD = {
    "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "referer":"https://www.mashangpa.com/problem-detail/3/",
    "cookie":"Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745904826; HMACCOUNT=F4C4588BDF5FAF81; sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1745913958"
}

s = 0
def parse(number: int):
    global s
    timestamp = round(time.time() * 1000)
    token = hashlib.md5(f"tuling{timestamp}{number}".encode('utf-8')).hexdigest()
    url = f"https://www.mashangpa.com/api/problem-detail/4/data/?page={number}&sign={token}&_ts={timestamp}"
    resp = requests.get(url, headers=HEAD)
    arr = resp.json().get("current_array", [])
    for a in arr:
        s += a
    resp.close()

if __name__ == '__main__':
    for i in range(1,21):
        parse(i)
    print(s)