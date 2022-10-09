import React from "react";
import { View, Alert } from "react-native";
import { Card, Button, Input } from "@rneui/themed";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const NewTodo = ({ addTodo }) => {
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (!task) {
      Alert.alert("Failed to add", "Task content cannot be empty");
      return;
    }
    addTodo(task);
    setTask("");
  };

  return (
    <Card>
      <Card.Title>New Task</Card.Title>
      <Card.Divider />
      <View>
        <Input
          mode="outlined"
          value={task}
          onChangeText={(task) => setTask(task)}
        />

        <Button mode="contained" onPress={handleAddTodo}>
          Add
        </Button>
      </View>
    </Card>
  );
};

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(NewTodo);
