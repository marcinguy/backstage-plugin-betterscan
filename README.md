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

You can use env var also:

app-config.yaml
```
 '/betterscan':
    target: http://localhost:5000
    headers:
      Authorization: Bearer ${BETTERSCAN_TOKEN}
```

And in shell:

```
export BETTERSCAN_TOKEN="bbf8e8794af64a51b304caf836c542c0"
```


Install plugin as a Page

![image](https://user-images.githubusercontent.com/20355405/206125709-97f749ef-7a90-4484-b540-c5e04a96360c.png)

or Component

![image](https://user-images.githubusercontent.com/20355405/206427203-18824de0-6707-4198-83fc-616ba0f9dd9b.png)


