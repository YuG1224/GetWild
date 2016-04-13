'use strict';

const Player = require('player');
const player = new Player();
const CronJob = require('cron').CronJob;
const argv = process.argv;
const timezone = process.env.TZ ? process.env.TZ : 'Asia/Tokyo';

// mp3のパスを設定
// 指定した数だけ連続再生
argv.forEach((val, index) => {
  if (index >= 2) {
    player.add(val);
  }
});

// 再生時の処理
player.on('playing', (item) => {
  console.log(`Now playing  : ${item._name}`);
});

// 再生終了時の処理
player.on('playend', (item) => {
  console.log(`Play done    : ${item._name}`);
});

// エラー時の処理
player.on('error', (err) => {
  console.error(err);
});

// cronで定期実行
const job = new CronJob({
  cronTime: '00 00 19 * * 1-5',
  onTick: () => {
    console.log('Get wild and tough!');
    player.play();
  },
  TimeZone: timezone
});
job.start();
