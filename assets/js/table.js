export default class TableGenerator {
    constructor(props) {
        const {data, containerId, onRowClick} = props;

        const tableContainer = document.getElementById(containerId);
        const table = document.createElement('table');

        const columnNames = Object.keys(data[0]);
        const tHead = this.generateTableHead(columnNames);
        table.append(tHead);

        const tBody = this.generateTableBody(data);

        if(onRowClick) {
            tBody.addEventListener('click', onRowClick);
        }
        table.append(tBody) 
        tableContainer.append(table);
    }

    generateTableHead = columns => {
        const tableHead = document.createElement('thead');
        const headRow = document.createElement('tr');

        columns.forEach(heading => {
            const th = document.createElement('th');
            th.innerHTML = heading;

            headRow.append(th);

        })

        tableHead.append(headRow);
        return tableHead
    }

    generateTableBody = data => {
        const tBody = document.createElement('tbody');

        data.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.setAttribute('data-index', index);
            
            for(const key in item) {
                const td = document.createElement('td');
                td.setAttribute('data-key', key);
                td.innerHTML = item[key];

                tr.append(td);
            }

            tBody.append(tr)
        });

        return tBody;
    }
}