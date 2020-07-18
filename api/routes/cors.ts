import cors from 'cors';

const whitelist = ['http://localhost:3000'];

const corsOptionsDelegate = (req, cb) => {
  console.info(req.header('Origin'));
  const corsOptions = whitelist.includes(req.header('Origin')) ? { origin: true } : { origin: false };
  cb(null, corsOptions);
};

export default { cors: cors(), corsWithOptions: cors(corsOptionsDelegate) };
