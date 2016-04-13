# Get Wild

```sh
# node
node app.js ./GET_WILD.mp3

# pm2
TZ=Asia/Tokyo pm2 start app.js --name GetWild --node-args='app.js ./GET_WILD.mp3'
```

pm2 でデーモン起動出来ます。

`--node-args` の 第2引数以降に再生したいmp3のパスを指定します。
