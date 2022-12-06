# backstage-plugin-betterscan
Betterscan Backstage Plugin

Install betterscan.io 

More here:

https://github.com/marcinguy/betterscan-ce

```
git clone https://github.com/marcinguy/betterscan-ce.git
cd betterscan-ce/dockerhub
./start.sh
```

Get Bearer token with:

```
curl -s 'http://localhost:5000/api/v1/login' --data-raw 'email=test@ok.com&password=testtest' | jq .access_token
```

Update:

app-config.yaml
```
 '/betterscan':
    target: http://localhost:5000
    headers:
      Authorization: Bearer bbf8e8794af64a51b304caf836c542c0
```
Bearer should be otput from curl


Install plugin

![image](https://user-images.githubusercontent.com/20355405/206018181-1bcd2ec7-82ce-4d58-b446-d2a7739b907d.png)

