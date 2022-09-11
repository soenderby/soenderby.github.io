const renderItem = content => createVirtualNode('li', null, content)
const renderList = items => createVirtualNode('ul', null, ...items.map(renderItem))

const paper = (name, details, references) => ({name, details, references: references.map(item => getTitle(item))})

const getTitle = string  => {
    const titlestart = string.indexOf('"') + 1
    const titleend = string.indexOf('"', titlestart)

    return string.slice(titlestart, titleend)
}

const addLinks = (references, relevant) => references.filter(item => relevant.includes(item))

const App = (content) =>
      createVirtualNode('div', { class: 'app' },
			createVirtualNode('h1', null, 'Placeholder'),
			createVirtualNode('p', null, content))
			
fetch('interesting.bib')
    .then(response => response.text())
    .then(text => {
	console.log(text)
	return render(App(text))
    })

