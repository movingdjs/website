const init = () => {
    console.log("initou")

    const data = [
        { "name": "Item 1" },
        { "name": "Item 2" },
        { "name": "Item 3" },
        { "name": "Item 4" },
        { "name": "Item 5" },
        { "name": "Item 6" },
        { "name": "Item 7" },
        { "name": "Item 8" },
        { "name": "Item 9" }
    ];

    const gridContainer = document.getElementById('grid-container');
    let colSizes = [4, 3, 2, 1];  // Definindo as colunas para cada linha

    let itemIndex = 0;

    colSizes.forEach(colSize => {
        const row = document.createElement('div');
        row.className = 'row g-4 justify-content-center';

        for (let i = 0; i < colSize && itemIndex < data.length; i++) {
            const col = document.createElement('div');
            col.className = 'col-custom';

            col.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data[itemIndex].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title.</p>
                    </div>
                </div>
            `;

            row.appendChild(col);
            itemIndex++;
        }

        gridContainer.appendChild(row);
    });
}
export { init }