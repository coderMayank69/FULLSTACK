const bcrypt = require('bcrypt');

const hashPassword = async (password) =>{
    // const salt = await bcrypt.genSalt(12);
    // const hash = await bcrypt.hash(password,salt);
    const hash = await bcrypt.hash(password,12);
    console.log(hash);
    // console.log(salt);
}

const login = async (password , hashedpw ) => {
    const result = await bcrypt.compare(password,hashedpw);
    if(result){
        console.log("LOGGED IN");
    }else{
        console.log("LOGGED OUT");
    }
}

hashPassword('naughtyAmerica');
login('naughtyAmerica',
    '$2b$12$pYOQxA33uhXfJqZS8mJbP.w4zRcMqe3wGBqRjLFtHOc3Xk7Ri/U1i')