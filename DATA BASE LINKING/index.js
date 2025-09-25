const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");


const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta',
    password : 'Neeraj@6637'
});


try{
conn.query(
    "Select * from instagram", (err, result) => {
       if(err) throw err;
       console.log(result);
    }
);
}catch(err){
    console.log(err);
}


let getRandomUser =  () =>  {
    return {
      id : faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      
    };
};


