import React, { useReducer,useRef,useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
//todos 배열 안에 들어 있는 객체에는 각 항목의 고유 id, 내용, 완료 여부를 알려 주는 값이 포함 되어 있다. 
//이 베열은 TodoList에 props로 전달되는데, TodoList에서 이 값을 받아 온 후 TodoItem으로 변환하여 렌더링하도록 설정해야 한다.

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos); //여기에 담어주면 리렌더링될 때마다 createBulkTodos함수가 호출되지만, 

// const App = () => {
//   const [todos,setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링해 보기',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);

 // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  // const nextId = useRef(4);

  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1; // nextId 1씩 더하기
  //   },
  //   [todos],
  // );

  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  // );

  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //       //위 코드에서는 배열 내장 함수 map을 사용하여 특정 id를 가지고 있는 객체의 checked 값을 반전 시켜 주었다. 
  //       //불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용하면 짧은 코드도 쉽게 작성할 수 있다고 한다.
  //       //하나의 원소만 수정하는데 왜 map 굳이?
  //       //메모장 확인
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [todos],
  // );
  function todoReducer(todos, action) {
    switch (action.type) {
      case 'INSERT': // 새로 추가
        // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
        return todos.concat(action.todo);
      case 'REMOVE': // 제거
        // { type: 'REMOVE', id: 1 }
        return todos.filter((todo) => todo.id !== action.id);
      case 'TOGGLE': // 토글
        // { type: 'REMOVE', id: 1 }
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        );
      default:
        return todos;
    }
  }
  
  const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  
    // 고유값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(2501);
  
    const onInsert = useCallback((text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; // nextId 1씩 더하기
    }, []);
  
    const onRemove = useCallback((id) => {
      dispatch({ type: 'REMOVE', id });
    }, []);
  
    const onToggle = useCallback((id) => {
      dispatch({ type: 'TOGGLE', id });
    }, []);
  
    return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
  };
  

export default App;