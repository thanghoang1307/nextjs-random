import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import excuteQuery from '../../middleware/mysql-db';

export default async (req, res) => {
    try {
      const result = await excuteQuery({
          query: 'INSERT INTO code (code) VALUES(?)',
          values: [[req.body.code]],
      });
      res.json({message: "done"});
  } catch ( error ) {
      console.log( error );
  }
  };