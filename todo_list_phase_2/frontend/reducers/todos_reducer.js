import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


 const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.map( el => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      let blankState = {};
      let newState2 = Object.assign(blankState, state);
      newState2[action.todo.id] = action.todo;
      return newState2;
    default:
      return state;
  }
};

export default todosReducer;
