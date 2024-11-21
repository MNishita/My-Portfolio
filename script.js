document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling; // Find the next sibling (dropdown-content)
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});