

export default function handler(req, res) {
 
  const fs = require('fs');

 fs.readFile(`blogdata/${req.query.slug}.json` , 'utf-8' , (err , data) => {
res.status(200).json(JSON.parse(data))

 })
  
  
 
  }
  