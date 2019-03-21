import React from "react";

const Todos = ({ todo, deleteTodo }) => {
  const Todolist = todo.length ? (
    todo.map(t => {
      return (
        <div className="collection item" key={t.id}>
          <p
            onClick={() => {
              deleteTodo(t.id);
            }}
          >
            {t.title}
          </p>
        </div>
      );
    })
  ) : (
    <div>
      <h1>There is NO list</h1>
    </div>
  );
  return Todolist;
};

export default Todos;
