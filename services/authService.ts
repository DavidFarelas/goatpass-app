import api from "./api";

interface LoginResponse {
  token: string;
}

export async function loginUser(email: string): Promise<LoginResponse> {
  try {
    const response = await api.post<LoginResponse>("/user/signin", { email });
    return response.data;
  } catch (error: any) {
    console.error("Error en loginUser:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Error en el inicio de sesión"
    );
  }
}
