/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { useEffect, useState } from 'react';
import { View, Flex, Form, TextField, ActionButton, AlertDialog, DialogTrigger, Well, Checkbox, Text } from '@adobe/react-spectrum';
import TaskList from '@spectrum-icons/workflow/TaskList';
import Close from '@spectrum-icons/workflow/Close';
import Add from '@spectrum-icons/workflow/Add';
import { useLState } from 'lstate';
import { Todo, todoStore } from '../state/collections-sample';

export function TodoListView() {
  const todoItems = useLState(todoStore);
  useEffect(() => {
    todoStore.reset()
  }, [])

  const [newTodo, setNewTodo] = useState('');

  return (
    <Well width="size-6000">
      <Flex direction="column" gap="size-200">
        <Flex gap="size-200" alignItems="center">
          <TaskList size="M" />
          <View flex="1">
            <h2 className="spectrum-Heading spectrum-Heading--sizeM spectrum-Heading--serif">
              collection sample
            </h2>
          </View>
          <DialogTrigger>
            <ActionButton isQuiet>
              <Close />
            </ActionButton>
            <AlertDialog
              title="Reset todo list"
              variant="destructive"
              primaryActionLabel="Reset"
              secondaryActionLabel="Cancel"
              onPrimaryAction={todoStore.reset}>
              This action will reset the todo list. Are you sure you want to continue ?
            </AlertDialog>
          </DialogTrigger>
        </Flex>
        <Form
          onSubmit={async (event) => {
            event.preventDefault();
            if (newTodo.trim())
              todoStore.add(newTodo)
            setNewTodo('');
          }}>
          <Flex gap="size-50">
            <TextField
              autoComplete="off"
              aria-label="New todo"
              width="100%"
              value={newTodo}
              onChange={(value) => {
                setNewTodo(value);
              }}
              placeholder="Todo"
              minLength={1}
              maxLength={140}
            />
            <ActionButton type="submit">
              <Add />
            </ActionButton>
          </Flex>
        </Form>
        <View marginTop="size-100">
          {todoItems.map((todo) => (
            <TodoView key={todo._id} todo={todo} />
          ))}
        </View>
      </Flex>
    </Well>
  );
}

function TodoView({ todo }: { todo: Todo }) {

  return (
    <Flex gap="size-100">
      <Checkbox
        aria-label="done"
        isSelected={todo.done}
        onChange={async () => {
          todoStore.toggle(todo._id)
        }}
        isEmphasized
        value={todo.description}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
        {todo.description}
      </span>
    </Flex>
  );
}
