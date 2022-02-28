import request from 'supertest';

import createServer from 'server';

const app = createServer();

describe('dashboard routes', () => {
  it('/dash responds with 200', (done) => {
    request(app).get('/dash').expect(200, done);
  });
});
