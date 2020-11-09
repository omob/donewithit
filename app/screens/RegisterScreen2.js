import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import AppHeaderText from "../components/AppHeaderText";
import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";


const categories = [
  { label: "Select Category", value: ""},
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(categories[0])

  const handleTextInput = (text) => setEmail(text);

  const handleFullName = (text) => setFullName(text);

  return  (
  <Screen style={styles.screen}>
    
    <AppHeaderText style={styles.loginText}>Register</AppHeaderText>

    <AppTextInput icon="email" placeholder="Enter your email" onChangeText={handleTextInput}/>
    <AppTextInput placeholder="Enter your fullname" onChangeText={handleFullName}/>

    <AppPicker 
      items={categories} 
      selectedItem={selectedItem}
      onItemSelected={(item) => setSelectedItem(item)}
      icon="apps" 
      placeholder="Categories"></AppPicker>

    <View style={{flexDirection: "row", justifyContent: "space-around", padding: 20}}>
       <AppText>Sign up for Newsletter?</AppText>
      <Switch value={isSubscribed} onValueChange={(newValue) => setIsSubscribed(newValue)}/>
    </View>

    <View style={{marginVertical: 20}}>
      <AppText> Full Name:  {fullName} </AppText>
      <AppText> Email:  {email} </AppText>
      <AppText> Category:  {selectedItem.value ? selectedItem.label : ""} </AppText>
      <AppText> Subscribe:  {isSubscribed? "Yes" : "No"} </AppText>
    </View>
  </Screen>
  ) 
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    padding: 10
  },
  loginText: {
    alignSelf: "center",
    marginVertical: 20
  }
})
