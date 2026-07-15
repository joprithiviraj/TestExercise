import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
 
const CheckInternetConnection = async () => {
  const state = await NetInfo.fetch();  
  if (!state.isConnected) {
    Alert.alert("No Internet", "Please connect to the internet and try again.");
    return false;
  }
  return true;
};
 

export default CheckInternetConnection;