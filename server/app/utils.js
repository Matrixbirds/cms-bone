'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    loadModule(name, basename) {
      return fs.readdirSync(path)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        });
    },
};
