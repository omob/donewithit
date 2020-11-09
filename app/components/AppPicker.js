import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Modal, Button,  FlatList } from "react-native";
import colors from "../config/colors";

import { TouchableWithoutFeedback} from "react-native-gesture-handler";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";


export default function AppPicker({ 
  icon, 
  items, 
  numberOfColumns = 1, 
  onItemSelected,
  PickerItemComponent = PickerItem, 
  placeholder, 
  selectedItem, 
  width = "100%"
}) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)} 
        style={[styles.container, { width: width }]}>
          {icon && 
            <MaterialCommunityIcons
              name={icon}
              color={defaultStyles.colors.medium}
              size={30}
              style={styles.icon}
            ></MaterialCommunityIcons>
          }

          { selectedItem ? <AppText style={styles.text}> {selectedItem.label}</AppText> 
          : <AppText style={styles.placeholder }> { placeholder } </AppText>}

          <MaterialCommunityIcons
              name={"chevron-down"}
              color={defaultStyles.colors.medium}
              size={30}
          ></MaterialCommunityIcons>
      </TouchableWithoutFeedback>
      <Modal animationType={"slide"} visible={modalVisible}>
        <Screen>
            <Button color={colors.dark} onPress={() => setModalVisible(false)} title="Close" />
            <FlatList 
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({item}) => 
                <PickerItemComponent 
                  item={item}
                  onPress={() => {
                    setModalVisible(false)
                    onItemSelected(item)
                  }
               } />}
            />
        </Screen>
      </Modal>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  },
  placeholder: { 
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1
  }
});
