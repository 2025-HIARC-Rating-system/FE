import apiClient from "./ApiClient";
export const sendAdminLogin = async (password: string): Promise<void> => {
  console.log(password);
  await apiClient.post(
    "/auth/login",
    {handle: "brayden", password: password},
    {withCredentials: true}
  );
};
