package local.hal.sa31.androidjava.lesson1.asgmt;

public class GirlFriend {
  /** 名前を表すフィールド */
  private String name;
  /** 誕生年を表すフィールド */
  private int birthYear;
  /** 誕生月を表すフィールド */
  private int birthMonth;
  /** 誕生日を表すフィールド */
  private int birthDay;

  /**
   * コンストラクタ
   * 
   * @param name       名前
   * @param birthYear  誕生年
   * @param birthMonth 誕生月
   * @param birthDay   誕生日
   */
  public GirlFriend(String name, int birthYear, int birthMonth, int birthDay) {
    this.name = name;
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
  }

  /**
   * 誕生月と一致するかどうかを判定するメソッド
   *
   * @param month 判定する月
   * 
   */
  public boolean isBirthMonth(int month) {
    return this.birthMonth == month;
  }

  /**
   * 年齢を取得するメソッド
   *
   * @param currentYear 現在の年
   * @return 年齢
   */
  public int getAge(int currentYear) {
    return currentYear - this.birthYear;
  }

  /**
   * 名前を取得するメソッド
   * 
   * @return 名前
   */
  public String getName() {
    return this.name;
  }

  /**
   * 誕生日を取得するメソッド
   *
   * @return 誕生日
   */
  public int getBirthDay() {
    return this.birthDay;
  }
}
