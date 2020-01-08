import API from './api';

import '../sass/index.scss';

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

class Main {
    constructor() {
        this.container = document.createElement('div');
        this.buildInput(this.container);
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
        let container = document.getElementById('results-header');
        if (!container) {
            container = document.createElement('div');
            container.padding = '1rem';
            container.id = 'results-header';
            const title = document.createElement('h2');
            title.innerText = 'Search results';
            container.appendChild(title);
            const lc = document.createElement('div');
            lc.className = 'list';
            parent.appendChild(container);
            parent.appendChild(lc);
        }

        if (isElement(content)) {
            container.removeChild(document.querySelector('#results-header > p'));
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
        const container = document.getElementById('results-header');
        const p = document.createElement('p');
        if (results.length > 0) {
            p.innerText = `${results.length} results found!`;
            this.renderResults(results);
        } else {
            this.clearResults();
            p.innerText = `No results found!`;
        }

        this.renderResultsContainer(null, p);

        return container;
    }

    renderResults(results) {
        const listContainer = document.querySelector('div.list');
        this.clearResults();
        results.sort(({ scoreA }, {scoreB}) => scoreB - scoreA);
        results.forEach(result => {
            listContainer.appendChild(this.buildResultItem(result));
        })
    }

    buildResultItem({ flightNumber, airport, originalTime, expectedTime }) {
        const el = document.createElement('p');
        el.innerText = `Flight ${flightNumber} to ${airport} departs at ${expectedTime}`;

        return el;
    }

    clearResults() {
        const listContainer = document.querySelector('div.list');
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild);
        }
    }
}

document.body.appendChild(new Main());
