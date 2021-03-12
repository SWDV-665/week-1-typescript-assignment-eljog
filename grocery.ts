/**
 * A grocery item
 */
class Grocery {
    name: string;
    quantity: number;
    unitPrice: number;
    isOrganic: boolean;

    /**
     * Create a grocery item
     * @param name Item name
     * @param quantity Item qty
     * @param unitPrice Item unit price
     * @param isOrganic Is item organic
     */
    constructor(name: string, quantity: number, unitPrice: number, isOrganic: boolean){
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.isOrganic = isOrganic;
    }
}

const groceries = new Array<Grocery>();
groceries.push(new Grocery("Milk", 10, 8.99, true));
groceries.push(new Grocery("Bread", 5, 3.99, false));
groceries.push(new Grocery("Egg", 5, 4.50, true));
groceries.push(new Grocery("Sugar", 10, 15.00, false));
groceries.push(new Grocery("Salt", 5, 1.00, false));

/**
 * Display groceries as a table on the HTML page
 */
function displayGroceries() {
    // Create table with border 1
    const table = document.createElement('table');
    table.setAttribute('border', '1');

    // Set header row
    const heading = createRow(['Name', 'Qty', 'Price', 'IsOrganic'], true);
    table.appendChild(heading);

    // Add grocery entries to the table
    groceries.forEach(g => {
        const row = createRow([g.name, g.quantity, g.unitPrice, g.isOrganic]);
        table.appendChild(row);
    });

    // Add table to the page body
    document.body.appendChild(table);
}

/**
 * Create an html table rown element
 * @param values Array of column values
 * @param isHeading Indicate whether it is a header row
 * @returns A table row with content
 */
function createRow(values: Array<string | number| boolean>, isHeading: boolean = false): HTMLTableRowElement {
    const row = document.createElement('tr');
    values.forEach(value => {
        const data = document.createElement(isHeading ? 'th' : 'td');
        data.textContent = value.toString();
        row.appendChild(data);
    });

    return row;
}
