import React, { useState } from 'react';

function CreateNewList({ onCancel, onCreate }) {
  const [listName, setListName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: listName }),
      });

      if (response.ok) {
        onCreate(); // Re-fetch the lists
        onCancel(); // Go back to the main screen
      } else {
        console.error('Failed to create list');
      }
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  return (
    <div className="create-list">
      <h2>Create New List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List Name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          required
        />
        <button type="submit">Create List</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateNewList;
