import { Component, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(window.localStorage.getItem('todos')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos(prevState => [...prevState, todo]);
  };

  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
// export class App extends Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     const todos = JSON.parse(localStorage.getItem('todos'));

//     if (todos) {
//       setState(() => ({ todos }));
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { todos } = this.state;

//     if (prevState.todos !== todos) {
//       localStorage.setItem('todos', JSON.stringify(todos));
//     }
//   }

//   addTodo = text => {
//     const todo = {
//       id: nanoid(),
//       text,
//     };

//     this.setState(({ todos }) => ({
//       todos: [...todos, todo],
//     }));
//   };

//   handleSubmit = data => {
//     this.addTodo(data);
//   };

//   deleteTodo = id => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== id),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     return (
//       <>
//         <Header />
//         <Section>
//           <Container>
//             <SearchForm onSubmit={this.handleSubmit} />

//             {todos.length === 0 && (
//               <Text textAlign="center">There are no any todos ... </Text>
//             )}

//             <Grid>
//               {todos.length > 0 &&
//                 todos.map((todo, index) => (
//                   <GridItem key={todo.id}>
//                     <Todo
//                       id={todo.id}
//                       text={todo.text}
//                       counter={index + 1}
//                       onClick={this.deleteTodo}
//                     />
//                   </GridItem>
//                 ))}
//             </Grid>
//           </Container>
//         </Section>
//       </>
//     );
//   }
// }
