const genArray = str => JSON.parse(str.replace(/'/g, '"').replace(/`/g, '"'))

const makeElement = (type, props, text) => {
    const el = document.createElement(type);

    Object.keys(props).forEach(prop => {
        el[prop] = props[prop];
    });

    const textNode = document.createTextNode(text);

    el.appendChild(textNode);

    return el;
}

const div = (...args) => makeElement(`div`, ...args);
const p = (...args) => makeElement(`p`, ...args);
const article = (...args) => makeElement(`article`, ...args);
const h3 = (...args) => makeElement(`h3`, ...args);
const h1 = (...args) => makeElement(`h1`, ...args);