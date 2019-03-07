import chai from 'chai';
import request from 'supertest';
import app from '../src';


const { expect } = chai;

describe('/GET all sales attendants', () => {
  it('should get all sales attendants', (done) => {
    request(app).get('/api/v1/attendants')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);

        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});


describe('/GET a sales attendant', () => {
  it('should get a particular sales attendant', (done) => {
    request(app).get('/api/v1/attendants/2')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not get a sales attendant that does not exist', (done) => {
    request(app).get('/api/v1/attendants/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/POST a sales attendant', () => {
  it('should create a sales attendants', (done) => {
    request(app)
      .post('/api/v1/attendants')
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

describe('/PUT a sales attendant', () => {
  it('should update a sales attendant', (done) => {
    request(app)
      .put('/api/v1/attendants/3')
      .send({ name: 'olive' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.name).to.equal('olive');
        done();
      });
  });


  it('should not update a sales attendant that does not exist', (done) => {
    request(app).put('/api/v1/attendants/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/DELETE a sales attendant', () => {
  it('should delete a sales attendant', (done) => {
    request(app)
      .delete('/api/v1/attendants/4')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not delete a sales attendant that does not exist', (done) => {
    request(app).delete('/api/v1/attendants/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});
