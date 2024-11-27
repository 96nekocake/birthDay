<?php
require_once("GirlFriend.php");

$girlfriends = [
  new GirlFriend("まゆみ", 2003, 1, 5),
  new GirlFriend("さちこ", 2006, 5, 15),
  new GirlFriend("まい", 2000, 5, 25),
  new GirlFriend("なみ", 2001, 8, 3),
  new GirlFriend("えり", 2003, 11, 19),
  new GirlFriend("りえ", 2005, 12, 23),
];

for ($i = 1; $i <= 12; $i++) {
  $birthDay = false;

  echo "■■■■■" . $i . "月です\n";

  foreach ($girlfriends as $girlfriend) {
    $message = "";
    if ($girlfriend->isBirthMonth($i)) {
      $birthDay = true;
      $message = sprintf(
        "%sさんが%d日に誕生日です。%d歳になります。メッセージを送りましょう！\n",
        $girlfriend->getName(),
        $girlfriend->getBirthDay(),
        $girlfriend->getAge(date("Y"))
      );
      echo $message;
    }
  }

  if (!$birthDay) echo "誕生日を迎える女性はいません。安心してください。\n";
}
