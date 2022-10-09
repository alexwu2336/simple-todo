import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import { Divider } from "@rneui/themed";
import TodoItem from "../components/TodoItem";
import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";

const TodoApp = ({ todoList }) => {
  return (
    <View style={styles.container}>
      <NewTodo />
      <Divider style={{ marginTop: 15 }} />
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <TodoItem todo={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#EEE",
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    todoList: state.todos.todoList,
  };
};

export default connect(mapStateToProps)(TodoApp);
