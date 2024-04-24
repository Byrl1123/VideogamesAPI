import User from "../models/user.js";

export const getUserProfile = async(req, res) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
   

    const [ total, usuarios ] = await Promise.all([
        User.countDocuments( query ),
        User.find( query )
            .skip( Number( desde ))
            .limit(Number( limite ))
    ]);
   

    res.json({
        total,
        usuarios
    });
};




export const createUserPost = async(req, res=response) => {
    const {username, email, password } = req.body
    const user = new User({ username, email, password });

    

    await user.save();
}; 


export const readUser = async(req, res) => {

};


export const getProfileUser = async(req, res) => {

};

export const deleteProfile = async(req, res) => {

};


