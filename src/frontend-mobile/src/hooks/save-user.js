// Após o login bem-sucedido, por exemplo
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserData = async (token, userData) => {
  try {
    // Salvar token
    await AsyncStorage.setItem("token", token);

    // Salvar dados do usuário (como objeto JSON)
    await AsyncStorage.setItem("userData", JSON.stringify(userData));

    console.log("Token e dados do usuário salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar token e dados do usuário:", error);
  }
};

// Chamada da função após o login
saveUserData("seuTokenAqui", { nome: "exemplo", email: "exemplo@email.com" });

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('Erro ao recuperar token:', error);
  }
};

export const getUserData = async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    return userData;
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error);
  }
};