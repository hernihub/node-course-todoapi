const bcrypt = require('bcryptjs');

// var pass = '123abc!';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(pass, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hash = '$2a$10$UsGxyIcJh9AeK4U5i7Qsp.Ax7hlrOKj3sdPC5YeS0vV0j3doIAcKu';

bcrypt.compare('passwordtest1', hash, (err, res) => {
    if (err) {

    }
    console.log(res);
});


// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// var data = {
//     id: 10
// };
// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var mgs = 'i am robot number 3';
// var hash = SHA256(mgs).toString();

// console.log(`message: ${mgs}`);
// console.log(`hasg: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)).toString();

// if (resultHash === token.hash) {
//     console.log('Data unchanged');
// } else {
//     console.log('Data changed, do not trust');
// }

