import React from 'react';

function ListContainer({ lists }) {
  return (
    <div className="list-container">
      <h2>All Lists</h2>
      {lists.length > 0 ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      ) : (
        <p>No lists available</p>
      )}
    </div>
  );
}

export default ListContainer;
