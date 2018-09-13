//number or string
const str = "Hello react!";

//array
const arr = ['Raj|', 'Than|', 'Seraphine']

//arrJsx 
const arrJsx = [<h1>Raj</h1>, <h1>Seraphine</h1>, <h1>Than</h1>]


//objects
const singleObj = { name: "raj", location: "London" }
const { name, location } = singleObj
const mappedJs = (
    <div>
        <h1>{name}</h1>
        <h1>{location}</h1>
    </div>
);
// ReactDOM.render(mappedJs, rootApp);
//array of objects
const objArr = [
    { name: 'name-one', location: 'loc-one' },//user
    { name: 'name-two', location: 'loc-two' }
]
const mappedObjArr = objArr.map(user => {
    // const {name, location} = user; refactor
    {/*
        <h1>Name: {name} </h1>
        <h2>Location:{location}</h2>
    */}
    return (
        <div>
            <h1>Name: {user.name} </h1>
            <h2>Location:{user.location}</h2>
        </div>
    )
})
// console.log("objArr++++++++", mappedObjArr);
ReactDOM.render(mappedObjArr, rootApp);

const jsx = (
    <div className="parent">
        <h1>Strings______________</h1>
        {str}
        <h1>Array_____________</h1>
        {arr}
        {arrJsx}
        <h1>Objects___________</h1>
        <h2>Name: {singleObj.name}</h2>
        <h2>Location: {singleObj.location}</h2>
        <h1>MappedObjectsArr___________</h1>
        {mappedObjArr}
    </div>
);
