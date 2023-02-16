//var _ = require('lodash');

import _ from 'lodash';

const data = [
    {
        username: 'andres',
        role: 'Admin'
    },
    {
        username: 'Juan',
        role: 'Vendedor'
    },
    {
        username: 'Ines',
        role: 'Vendedor'
    },
    {
        username: 'Santiago',
        role: 'Vendedor'
    }
]
_.groupBy(data, (item) => item.role)