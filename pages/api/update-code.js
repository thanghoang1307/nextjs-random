import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import excuteQuery from '../../middleware/mysql-db';

export default async (req, res) => {
    try {
      const result = await excuteQuery({
          query: 'INSERT INTO code (code, seri) VALUES(?)',
          values: [[req.body.code, req.body.seri]],
      });
      res.json({message: "done"});
  } catch ( error ) {
      console.log( error );
  }
  };