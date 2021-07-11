console.log("app.js is running");
// jsx - js xml. js extensions
// can have only one root element - see div below

// app class

const app = {
    title :"Indecision App",
    subtitle : "This is awesome",
    options :['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle ? <p>{app.subtitle}</p> : null }  
        {app.subtitle && <p>{app.subtitle}</p> }
        <p>{app.options.length > 0 ? 'here are your options' : ''}</p>    
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>     
        <hr></hr>   
    </div>
);

// const template = (
//     <div>
//         <h1>Indecision App1</h1>
//         <p>This is jsx from app.js Does this change!</p>
//         <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//         </ol>
//     </div>
// );

const userName = "Mohanraj";
const userAge = 29;
const userlocation = "Samm";

const user = {
    name : "mohan dharma",
    age : 4,
    location: "boca"
};

function getLocation(location) {
    if (location) {
        return location
    } 

    return "unknown"
}

function getLocation2(location) {
    if (location) {
        return <p>location:{location}</p>
    } 

    // if we omit return, it will return undefined - web page won't display anything
    return undefined
}

// Tenary, Calling function, return html element from a function
// false/true/null/undefined are ignored 

// Bool: true && SomeAge => SomeAge
//       false && SomeAge => 
const template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {false}
        {true}
        {null}
        {undefined}
        <p>Age:{user.age}</p>
        { (user.age && user.age >= 18) && <p>Age:{user.age}</p>}
        { (user.age && user.age >= 18) ? <p>Age:{user.age}</p> : null}
        <p>Location:{getLocation(user.location)}</p>
        {<h3>123</h3>}
        {getLocation2(user.location)}
    </div>
);

// app and app2 are defined in index.html
const appRoot = document.getElementById("app");
const appRoot2 = document.getElementById("app2");
    
ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);