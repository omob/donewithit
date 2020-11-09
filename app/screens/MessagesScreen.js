import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Hello World donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.  amet, consectetur, lorem ipsum dolor sit amet, consectetur adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis",
    description: "lorem ipsum dolor sit adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.  amet, consectetur, lorem ipsum dolor sit amet, consectetur adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Hi there",
    description: "lorem ipsum dolor sit adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.  amet, consectetur, lorem ipsum dolor sit amet, consectetur adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Pressed ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Hello World",
              description: "lorem ipsum dolor sit adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.  amet, consectetur, lorem ipsum dolor sit amet, consectetur adipiscing elit. donec et ornare mauris. nunc tincidunt diam non sem sagittis, eu ornare ante convallis. praesent porta metus quis turpis ornare tincidunt.",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 2,
              title: "Hi there",
              description: "This is a descreiption",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 3,
              title: "Heyyy",
              description: "We met the other day",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
