import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css'

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '太郎',
    'birthday': '961222',
    'gender': '男',
    'job': '大学生'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '田中',
    'birthday': '861222',
    'gender': '男',
    'job': 'システムエンジニア'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '金',
    'birthday': '901222',
    'gender': '男',
    'job': 'システムエンジニア'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
