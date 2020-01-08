import API from './api';

import '../sass/index.scss';

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

class Main {
    constructor() {
        this.container = document.createElement('div');

        this.buildInput(this.container);

        // const t = document.createElement('h2');
        // t.innerText = 'found results!!';
        this.renderResultsContainer(this.container);

        return this.container;
    }

    buildInput(parent) {
        const input = document.createElement('input');
        input.className = 'rw-input-text';
        input['data-input'] = 'true';
        input.type = 'text';
        input.placeholder = 'For example: KL1001, KLM or London';

        parent.appendChild(input);

        input.addEventListener('keyup', async el => {
            const results = await API.searchFlights(el.target.value);
            this.handleSearch(results);
        });
    }

    renderResultsContainer(parent, content = null) {
        let container = document.getElementById('results-container');
        if (!container) {
            container = document.createElement('div');
            container.padding = '1rem';
            container.id = 'results-container';
            const title = document.createElement('h2');
            title.innerText = 'Search results';
            container.appendChild(title);
            parent.appendChild(container);
        }

        if (isElement(content)) {
            container.removeChild(document.querySelector('#results-container > p'));
            container.appendChild(content);
        } else if (!content) {
            const p = document.createElement('p');
            p.innerText = 'No results found!';
            container.appendChild(p);
        } else {
            container.innerHTML = content;
        }

        return container;
    }

    handleSearch(results) {
        const container = document.getElementById('results-container');
        const p = document.createElement('p');
        if (results.length > 0) {
            p.innerText = `${results.length} results found!`;
        } else {
            p.innerText = `No results found!`;
        }

        this.renderResultsContainer(null, p);

        return container;
    }
}

document.body.appendChild(new Main());
