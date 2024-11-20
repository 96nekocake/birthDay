/**
 * SA31 課題2
 * サポートJavaScriptファイル
 * 
 * ガールフレンドを表すクラス。
 * 
 * @author Shinzo SAITO
 */
export default class GirlFriend {
    /**
     * 名前を表すフィールド。
     */
    #name;
    /**
     * 誕生年を表すフィールド。
     */
    #birthYear;
    /**
     * 誕生月を表すフィールド。
     */
    #birthMonth;
    /**
     * 誕生日を表すフィールド。
     */
    #birthDay;

    /**
     * コンストラクタ。
     *
     * @param {string} name 名前。
     * @param {number} birthYear 誕生年。
     * @param {number} birthMonth 誕生月。
     * @param {number} birthDay 誕生日。
     */
    constructor(name, birthYear, birthMonth, birthDay) {
        this.#name = name;
        this.#birthYear = birthYear;
        this.#birthMonth = birthMonth;
        this.#birthDay = birthDay;
    }

    /**
     * 引数で渡された月が誕生月かどうかを判定するメソッド。
     *
     * @param {number} month 判定に使われる月。
     * @return {boolean} 誕生月の場合はtrue、そうでない場合はfalse。
     */
    isBirthMonth(month) {
        return month === this.#birthMonth;
    }

    /**
     * 引数で渡された年に何歳になるかを計算するメソッド。
     *
     * @param {number} year 計算の基となる年。
     * @return {number} 年齢。
     */
    getAge(year) {
        return year - this.#birthYear;
    }

    /**
     * 名前フィールドのゲッタ。
     */
    get name() {
        return this.#name;
    }

    /**
     * 誕生年フィールドのゲッタ。
     */
    get birthYear() {
        return this.#birthYear;
    }

    /**
     * 誕生月フィールドのゲッタ。
     */
    get birthMonth() {
        return this.#birthMonth;
    }

    /**
     * 誕生日フィールドのゲッタ。
     */
    get birthDay() {
        return this.#birthDay;
    }
}
