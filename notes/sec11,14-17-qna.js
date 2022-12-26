/*
>> just in case someone would like to use Deno instead of NodeJS for program execution, this is how the same code would look like:
const matches = Deno
.readTextFileSync("football.csv")
.split("\n")
.map((row: string): string[] => {
  return row.split(",");
});

console.log(matches);

Deno natively supports TypeScript, so we run the .ts file directly with:
deno run --no-check --allow-read src/index.ts
--no-check parameter makes the start a bit faster because it doesn't check type errors.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>

_ 275

Tip to avoid having to use interfaces on StoreState
1 upvote
João Paulo Furtado · Lecture 275 · 2 years ago
Just do a

export type StoreState = ReturnType<typeof rootReducer>;

This will build the type as you add reducers to combineReducers


_283
_ SOL 1

Another way of resolving the error, instead of declaring "fetchTodos: Function;"
3 upvotes
Wolfgang · Lecture 283 · 3 years ago
Hi Stephen

The "cheat" of  declaring "fetchTodos: Function;" did not resolve the error for me, so I had to look for a different way to fix this.

I found that fetchTodos can remain a typeof fetchTodos as below;

interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}
... if  in ./actions/todos.ts the action creator fetchTodos is declared to return a Function, like so:

export const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);
 
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: res.data
    });
  };
};
This resolved the error for me.

_ SOL 2
Anoter way of resoving fetchTodos type
6 upvotes
Slava · Lecture 283 · 2 years ago
We can use ConnectedProps from 'react-redux' and split the connect()() call in two parts:

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
 
const mapStateToProps = ({ todos }: StoreState) => {
  return { todos };
};
 
const mapDispatchToProps = { fetchTodos, deleteTodo };
 
const connector = connect(mapStateToProps, mapDispatchToProps);
 
type AppProps = ConnectedProps<typeof connector>;
 
...
 
export const App = connector(_App);

*/
