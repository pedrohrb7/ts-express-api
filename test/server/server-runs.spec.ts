import request from 'supertest';
import { expect } from 'chai';

import createServer from 'server';

const app = createServer();

// eslint-disable-next-line no-undef
describe('server checks', () => {
  // eslint-disable-next-line no-undef
  it('server is created without error', (done) => {
    request(app).get('/').expect(200, done);
  });
});
