const supertest = require('supertest');
const { expect } = require('chai');

const app = require('../../src');

const api = supertest(app);
