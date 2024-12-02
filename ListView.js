import React, { useState, useEffect } from 'react';
import { fetchLists } from '../api';

const ListView = () => {
  const [lists, setLists] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchLists()
      .then(data => {
        setLists(data);
        setStatus('success');
      })
      .catch(() => setStatus('failure'));
  }, []);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failure') return <div>Error! Try again.</div>;

  return (
    <div className="list-view">
      {lists.map(list => (
        <div key={list.id}>{list.name}</div>
      ))}
    </div>
  );
};

export default ListView;
