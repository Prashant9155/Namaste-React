// const header=React.createElement( 
//     "h1", { id: "heading"}, "Hello World From react!"
//  );

const header = React.createElement("div",{id:"parent"}, [
    React.createElement("div", {id:"child"},[
        React.createElement('h1',{}, "this is first child h1 tag"),
        React.createElement('h2',{}, "this is first child h2 tag")
]),
    React.createElement("div", {id:"child2"},[
    React.createElement('h1',{}, "this is second child h1 tag"),
    React.createElement('h2',{}, "this is second child h2 tag")
    ])
])

 const root=ReactDOM.createRoot(document.getElementById("root"));

 root.render(header);