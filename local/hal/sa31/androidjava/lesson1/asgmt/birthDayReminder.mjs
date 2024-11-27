import GirlFriend from "./GirlFriend.mjs";

const girlFriends = [
  new GirlFriend("まゆみ", 2003, 1, 5),
  new GirlFriend("さちこ", 2006, 5, 15),
  new GirlFriend("まい", 2000, 5, 25),
  new GirlFriend("なみ", 2001, 8, 3),
  new GirlFriend("えり", 2003, 11, 19),
  new GirlFriend("りえ", 2005, 12, 23),
];

for (let i = 1; i <= 12; i++) {
  console.log(`■■■■■${i}月です`);

  for (const girlFriend of girlFriends) {
    if (girlFriend.isBirthMonth(i)) {
      console.log(
        `${girlFriend.name}さんが${girlFriend.birthDay}日に誕生日です。` +
          `${
            girlFriend.getAge(new Date().getFullYear())
          }歳になります。メッセージを送りましょう！`,
      );
    }
  }
}
