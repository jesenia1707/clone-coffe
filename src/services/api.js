
const API_URL = import.meta.env.VITE_API_URL;

export const obtenerProductos = async (user) => {
  if (!API_URL) {
    throw new Error(
      "Falta configurar VITE_API_URL en las variables de entorno."
    );
  }

  const token = user?.id_token;

  if (!token) {
    throw new Error(
      "No se encontró el ID token de la sesión OIDC."
    );
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
