import chai from 'chai';
import request from 'supertest';
import app from '../src';


const { expect } = chai;

describe('/GET all sales record', () => {
  it('should get all sales sales record', (done) => {
    request(app).get('/api/v1/sales')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);

        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});


describe('/GET a sales record', () => {
  it('should get a particular sales attendant', (done) => {
    request(app).get('/api/v1/sales/2')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not get a sales record that does not exist', (done) => {
    request(app).get('/api/v1/sales/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/POST a sales ', () => {
  it('should create a sales ', (done) => {
    request(app)
      .post('/api/v1/sales')
      .send({ id: 1, name: 'ivy' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.id).to.be.equal(6);
        expect(res.body.data.name).to.equal('ivy');
        done();
      });
  });
});

describe('/PUT a sales ', () => {
  it('should update a sales record', (done) => {
    request(app)
      .put('/api/v1/sales/3')
      .send({ name: 'olive' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.name).to.equal('olive');
        done();
      });
  });


  it('should not update a sales record that does not exist', (done) => {
    request(app).put('/api/v1/sales/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/DELETE a sales record', () => {
  it('should delete a sales record', (done) => {
    request(app)
      .delete('/api/v1/sales/4')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not delete a sales record that does not exist', (done) => {
    request(app).delete('/api/v1/sales/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});
