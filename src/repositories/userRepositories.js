import User from '../schema/userSchema.js';

async function findAUser(parameters) {
    try {
        const user = await User.findOne({...parameters});
        return user;
    } catch (error) {
        console.log(error);
    }
}


async function createAUser(userDetails) { 
    try {
        const newUser = await User.create(userDetails);
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export { findAUser, createAUser };