
import { fetchAuthSession } from "aws-amplify/auth";

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerProductos = async () => {
  if (!API_URL) {
    throw new Error(
      "Falta configurar VITE_API_URL en las variables de entorno."
    );
  }

  const sesion = await fetchAuthSession();
  const token = sesion.tokens?.idToken?.toString();

  if (!token) {
    throw new Error("No se encontró el token de Cognito.");
  }

  const respuesta = await fetch(
    `${API_URL.replace(/\/+$/, "")}/api/productos`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!respuesta.ok) {
    throw new Error(`Error del servidor: ${respuesta.status}`);
  }

  return respuesta.json();
};
