var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();

    console.log('dragOver');
}
function dragEnter() {
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop(e) {
    console.log(e);
    this.className = 'empty';
    this.append(fill);
}