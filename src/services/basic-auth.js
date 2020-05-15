const fs = require('fs');

module.exports = {
  async digestAuth(authentication) {
    const data = fs.readFileSync(`${__dirname}/users.json`);
    const usersArray = JSON.parse(data);
    let validite = false;

    usersArray.map(obj => {
      if (obj.email == authentication[0] && obj.password == authentication[1]) {
        validite = true;
      }
    });
    return validite;
  },
};
