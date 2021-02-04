const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
};

hashPassword('monkey');

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log(`You're in!!!!!!!!!`);
    } else {
        console.log('Nope');
    }
};

//login('monkey', '$2b$12$SRxLjPBOsY/FWyK7c0Mev.49Mlg0gr6tCoG.xLpwwBMcfYwgA5166');