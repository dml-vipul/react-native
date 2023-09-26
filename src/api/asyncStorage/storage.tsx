import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStorage = async (storageKey: string, data: any) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      const _value = JSON.parse(value);
      return _value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeLocalStoarage = async (storageKey: string) => {
  try {
    await AsyncStorage.removeItem(storageKey);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
