
// Function for creating a virtual DOM node
const createVirtualNode = (name, attributes, ...children) => ({ name, attributes, children })

// Create an actual DOM node based on a Virtual Node
const createActualNode = vnode => {
    const { name, attributes, children } = vnode

    if(vnode.split) return document.createTextNode(vnode)

    let element = document.createElement(name)

    for (let key in attributes) {
    	element.setAttribute(key, attributes[key])
    }

    (children || []).forEach(child => element.appendChild(createActualNode(child)))

    return element
}

// Render a DOM node in the a div element with id 'root'
let dom = undefined;
const render = component => {
    const root = document.querySelector('#root')
    const newDom = createActualNode(component)
    if (dom)
	root.replaceChild(newDom, dom)
    else
	root.appendChild(newDom)
    dom = newDom
}

/*  
const App = () => createNode('h1', null, 'Hello Virtual DOM')

const App2 = (props) => {
    const { list } = props

    return createNode('div', { class: 'app' },
		      createNode('h1', null, 'Simple Virtual DOM'),
		      renderList(list)
		     )
}

const renderItem = content => createNode('li', null, content)
const renderList = items => createNode('ul', null, ...items.map(renderItem))


render(App2(state))

setInterval(() => {
  state.list = [
    ...state.list,
    'another',
  ];
    render(App2(state));
}, 1000);



*/


