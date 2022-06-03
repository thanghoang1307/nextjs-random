import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import excuteQuery from '../../middleware/mysql-db';

export default async (req, res) => {
    try {
      const result = await excuteQuery({
          query: 'SELECT * FROM code',
      });
      console.log(result)
      res.json(result);
  } catch ( error ) {
      console.log( error );
  }
  };