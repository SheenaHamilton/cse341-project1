const express = require('express');
const swaggergen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Application',
        description: 'CSE 341 Contacts Project by Sheena Hamilton.'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggergen(outputFile, endpointsFiles, doc);