import express from 'express';
import salesRouter from './routes/sales';
import productRouter from './routes/products';
import categoryRouter from './routes/categories';
import attendantRouter from './routes/salesAttendants';


const app = express();

app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/attendants', attendantRouter);


const port = process.env.PORT || 3000;

app.listen(port);

export default app;
