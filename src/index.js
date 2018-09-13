import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import mydata from './users.json'
// console.log(mydata);
const rootApp = document.getElementById('rootApp')

//components
function Users(props) {
    const mappeUsers = props.users.map(obj => {
        return (
            <div>
                <h1>Name: {obj.name}</h1>
                <h2>Location:{obj.location}</h2>
            </div>
        )
    })
    return mappeUsers
}
function User({user}) { 
    console.log('props', user);
    // const { user } = props
    console.log('explore:', user)
   
    // console.log("explore:", props.user.name);
    return <div>
        <h1>Name: {user.name}</h1>
        <h2>Location!</h2>
      </div>;

}
const userObj = { name: "raj!!", location: "London" }
const arr = [2, 4, 6, 60]
// const jsxCom = <Users users={objArr} />;
const jsxCom = <User user={mydata} />; 
ReactDOM.render(jsxCom, rootApp);
{/*(
  <div>
    <User />
    <h1>second time</h1>
    <User />
  </div>
)*/}


