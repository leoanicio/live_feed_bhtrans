import express from 'express';
import cors from 'cors';

import routes from './api/routes';

const app = express();

app.use(routes)

app.listen(3000, () => { })

export default app;