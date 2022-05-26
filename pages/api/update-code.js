import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import excuteQuery from '../../middleware/mysql-db';

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
          query: 'INSERT INTO code (code, seri) VALUES(?)',
          values: [[req.body.code, req.body.seri]],
      });
      console.log( "ttt",result );
      res.json({message: "done"});
  } catch ( error ) {
      console.log( error );
  }
  };

// const handler = nextConnect();
// handler.use(middleware);
// handler.post(async (req, res) => {
//     let data = req.body;
//     let doc = await req.db.collection('code').insertOne(data);
//     res.json(doc);
// });

// export default handler;