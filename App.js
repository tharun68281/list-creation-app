import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import CreateNewList from './CreateNewList';

function App() {
  const [lists, setLists] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/list-creation/lists');
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  const handleCreateNewList = () => {
    setIsCreating(true);
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
  };

  return (
    <div className="App">
      {!isCreating && (
        <button className="create-list-btn" onClick={handleCreateNewList}>
          Create New List
        </button>
      )}
      {isCreating ? (
        <CreateNewList onCancel={handleCancelCreate} onCreate={fetchLists} />
      ) : (
        <ListContainer lists={lists} />
      )}
    </div>
  );
}

export default App;
