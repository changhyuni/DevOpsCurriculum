import request from 'supertest';
import server from '/Users/changhyunkim/Desktop/DevOpsCurriculum/Quest09/server/server';


describe('Test /api', () => {
  it ('should return chang hyun!', (done) => {
    request(server).get('/api').then((response) => {

      // Check JSON "username" : "changhyun"
      expect(response.text).toBe("{\"username\":\"changhyun\"}");
      done();
    });
  });
});