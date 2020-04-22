import axios from "axios";
import { COUNTER_API_URL } from "./constants/constants";

class TodoListApi {
  static getTodoList() {
    return axios.get(COUNTER_API_URL);
  }
}

export default TodoListApi;