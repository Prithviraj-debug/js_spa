import { getContent } from './getContent.mjs';

const btns = document.querySelectorAll('nav button');
const contentDiv = document.getElementById('content');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        updateContent(sectionId);
    });
});


function updateContent(sectionId) {
    const sectionContent = getContent(sectionId);

    contentDiv.innerHTML = sectionContent;
}

