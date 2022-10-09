import React from "react";
import { View, Alert } from "react-native";
import { Text, Card, Button, Input } from "@rneui/themed";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actions";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [task, setTask] = React.useState("");
  const [editing, setEditing] = React.useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };
  const handleEditTodo = () => {
    if (!task) {
      Alert.alert("Failed to edit", "Task content cannot be empty");
      return;
    }
    editTodo(todo.id, task);
    setEditing(false);
    setTask("");
  };
  const showInput = () => {
    setTask(todo.task);
    setEditing(true);
  };

  return (
    <Card>
      <Card.Title>{`Task ${todo.id}`}</Card.Title>
      <Card.Divider />
      {editing ? (
        <Input mode="outlined" value={task} onChangeText={setTask} />
      ) : (
        <Text>{todo.task}</Text>
      )}
      <Card.Divider style={{ marginTop: 15 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          size="sm"
          style={{ marginRight: 15 }}
          onPress={editing ? handleEditTodo : showInput}
        >
          {editing ? "Submit" : "Edit"}
        </Button>
        <Button color="error" size="sm" onPress={handleDeleteTodo}>
          Delete
        </Button>
      </View>
    </Card>
  );
};

const mapDispatchToProps = { deleteTodo, editTodo };

export default connect(() => ({}), mapDispatchToProps)(TodoItem);
