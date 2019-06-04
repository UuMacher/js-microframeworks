const examples = Array.from(document.querySelectorAll('.code-example'));

let current = 0;

const show = id => {
    current = Math.max(0, id);
    if (current >= examples.length) {
        current = 0;
    }
    examples.forEach((example, index) => {
        example.hidden = index != current;
    });
};

const nav = document.createElement('nav');

const buttonPrevious = document.createElement('button');
buttonPrevious.addEventListener('click', () => show(current - 1));
buttonPrevious.innerText = '⬅️';

const buttonNext = document.createElement('button');
buttonNext.addEventListener('click', () => show(current + 1));
buttonNext.innerText = '➡️';

nav.appendChild(buttonPrevious);
nav.appendChild(buttonNext);
document.body.appendChild(nav);

show(current);


