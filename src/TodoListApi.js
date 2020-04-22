import axios from "axios";
import { TODOLIST_API_URL } from "./constants/constants";

class TodoListApi {
  static getTodoList() {
    return axios.get(TODOLIST_API_URL);
  }
}

export default TodoListApi;