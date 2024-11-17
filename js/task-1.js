document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.item');
    console.log(`Number of categories: ${categoryItems.length}`);

    categoryItems.forEach((category) => {
        const title = category.querySelector('h2').textContent;
        const elementsCount = category.querySelector('ul').children.length;

        console.log(`Category: ${title}`);
        console.log(`Elements: ${elementsCount}`);
    });
});
