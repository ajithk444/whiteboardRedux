import {MyAction} from "../../store";
/**
 * Created by eller on 16.05.17.
 */
export class DbActions {
  static DB_USER_LOGIN = "DB_USER_LOGIN";

  static userLogin(userName: String): MyAction {
    return {
      type: this.DB_USER_LOGIN,
      payload: userName
    };
  } // static userLogin(userName: String).

}
