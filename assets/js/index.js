import TableGenerator from './table.js';
import PreviewModal from './modal.js';
import {rowClick} from './events.service.js';

const app = () => {
    const modal = new PreviewModal({modalId: 'rowModal'});
        fetch('https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json')
        .then(response => response.json())
        .then(data => { 
            new TableGenerator({
                data,
                containerId: 'tableContainer',
                onRowClick: rowClick(modal, data),
        });
    })
}

app();
