import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { todos } from 'redux/todoSlice';

export default function ToDoList() {
  const valueTodos = useSelector(todos);

  return (
    <>
      {valueTodos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {valueTodos.length > 0 &&
          valueTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
}
