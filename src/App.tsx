import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './modules/Grid/Grid';
import './App.css';

const entities = {
    1: {
        id: 1,
        title: 'Orange is the best fruit in the world',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    2: {
        id: 2,
        title: 'Apple juice is fit for your heal',
        priority: 2,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    3: {
        id: 3,
        title: 'Scientist had been talking about climatic situation',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    4: {
        id: 4,
        title: 'What is new in JS es-2020 ?',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    5: {
        id: 5,
        title: 'Orange is the best fruit in the world',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    6: {
        id: 6,
        title: 'Apple juice is fit for your heal',
        priority: 2,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    7: {
        id: 7,
        title: 'Scientist had been talking about climatic situation',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    8: {
        id: 8,
        title: 'What is new in JS es-2020 ?',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    9: {
        id: 9,
        title: 'Orange is the best fruit in the world',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    10: {
        id: 10,
        title: 'Apple juice is fit for your heal',
        priority: 2,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    11: {
        id: 11,
        title: 'Scientist had been talking about climatic situation',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    12: {
        id: 12,
        title: 'What is new in JS es-2020 ?',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    13: {
        id: 13,
        title: 'Scientist had been talking about climatic situation',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    },
    14: {
        id: 14,
        title: 'What is new in JS es-2020 ?',
        priority: 1,
        created_at: '08-18-2019',
        created_by: 'Viktor Panasiuk'
    }
}

const result =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function App() {
  return (
    <div className="App">
      <Grid
          columns={[
              { name: 'id', children: 'Id'},
              { name: 'title', children: 'Title' },
              { name: 'priority', children: 'Priority' },
              { name: 'created_at', children: 'Created at' },
              { name: 'created_by', children: 'Author' }]}
          data={{ entities, result, count: 11, hasMore: true }}
          options={{ loadingType: 'pagination' }}
      />
    </div>
  );
}

export default App;
