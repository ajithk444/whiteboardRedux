import {MyAction} from "../../store";
/**
 * Created by eller on 16.05.17.
 */
export class DbActions {
  static DB_USER_LOGIN = "DB_USER_LOGIN";
  static DB_USER_LOGIN_FAILED = "DB_USER_LOGIN_FAILED";
  static DB_USER_LOGOUT = "DB_USER_LOGOUT";

  static userLogin(userName: String): MyAction {
    return {
      type: this.DB_USER_LOGIN,
      payload: userName
    };
  } // of static userLogin(userName: String).

  static userLoginFailed(errorTxt: string): MyAction {
    return {
      type: this.DB_USER_LOGIN_FAILED,
      payload: errorTxt
    };
  } // of static userLoginFailed()
  static userLogout(): MyAction {
    return {
      type: this.DB_USER_LOGOUT,
      payload: null
    };
  } // of static userLogout()
}
