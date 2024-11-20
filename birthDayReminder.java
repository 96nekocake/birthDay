package local.hal.sa31.androidjava.lesson1.asgmt;

public class birthDayReminder {
  public static void main(String[] args) {
    GirlFriend[] girlFriends = new GirlFriend[] {
        new GirlFriend("まゆみ", 2003, 1, 5),
        new GirlFriend("さちこ", 2006, 5, 15),
        new GirlFriend("まい", 2000, 5, 25),
        new GirlFriend("なみ", 2001, 8, 3),
        new GirlFriend("えり", 2003, 11, 19),
        new GirlFriend("りえ", 2005, 12, 23)
    };

    for (int i = 1; i <= 12; i++) {
      System.out.println("■■■■■" + i + "月です");
      for (GirlFriend gf : girlFriends) {
        if (gf.isBirthMonth(i)) {
          System.out.println(
              gf.getName() + "さんが" +
                  gf.getBirthDay() + "日に誕生日です。" +
                  gf.getAge(2024) + "歳になります。メッセージを送りましょう！");
        }
      }
    }
  }
}
