import requests

HEAD = {
    "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "cookie":"Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1745904826; HMACCOUNT=F4C4588BDF5FAF81; sessionid=d5iowmvnczn5zyj8tjshnyru94hhgtgn; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1745913958"
}

sum = 0
def parse(url: str):
    global sum
    resp = requests.get(url, headers=HEAD)
    resp.encoding = "utf-8"
    arr = resp.json().get("current_array", [])
    for a  in arr:
        sum += a
    resp.close()

if __name__ == '__main__':
    for i in range(1, 21):
        url = f"https://www.mashangpa.com/api/problem-detail/1/data/?page={i}"
        parse(url)

    print(sum)