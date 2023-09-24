import ToDoList from 'components/toDoList/toDoList';

import { Container, Header, SearchForm, Section } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <ToDoList />
        </Container>
      </Section>
    </>
  );
};
