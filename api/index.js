import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({data: 'Some data'});
});

export default router;