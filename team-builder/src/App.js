import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const team = [{name: "Tim", age: 22}, {name: "Susan", age: 32}, {name: "Robert", age: 19}]

  const [teamMembers, setTeamMembers] = useState(team);
  const [member, setMember] = useState({name: '', age: ''})

  const handleChange = event => {
    setMember({...member, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault()
    setTeamMembers([...teamMembers, member])
    setMember({name: '', age: ''})
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleChange}
        /><br/>
        <input
          type="number"
          name="age"
          min="10"
          max="100"
          value={member.age}
          onChange={handleChange}
        /><br/>
        <button onClick={handleSubmit}>Add Friend</button>
      </form>
      <ol>
        {teamMembers.map((tm, i) => {
          return <TeamMember tm={tm} i={i}/>
        })}
      </ol>
    </div>
  );
}

function TeamMember({tm, i}){
  return (
    <li key={i}>name: {tm.name}, age: {tm.age}</li>
  )
}

export default App;
