import axios from "axios";

const baseURL = "https://randomuser.me/api/";

const apiService = axios.create({
  baseURL,
});
const seed = "0b5cabddb78a897b";

export const fetchUsers = async (results: number) => {
  try {
    const response = await apiService.get(`?results=${results}&seed=${seed}`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};
