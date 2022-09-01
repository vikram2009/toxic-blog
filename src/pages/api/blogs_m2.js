




export default async function handler(req, res) {
const fs = require('fs');
let data = await fs.promises.readdir('blogdata');
let myfile;
let allblogs = []


for (let index = 0; index < data.length; index++) {
    const items = data[index];
myfile = await fs.promises.readFile('blogdata/' + items , 'utf-8')
allblogs.push(JSON.parse(myfile))


    
}
res.status(200).json(allblogs)
}

