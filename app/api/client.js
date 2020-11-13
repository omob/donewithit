import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.18.100.77:9000/api",
});

export default apiClient;
