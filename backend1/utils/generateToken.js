import jwt from  'jsonwebtoken';
import { JWT_SECRET } from '../seckey.js';


const generateToken = (res, userId) => 
{
        //const token = jwt.sign({userId:user._id},  process.env.JWT_SECRET, {
        const token = jwt.sign({userId},  JWT_SECRET, {
            expiresIn:'60d',
        });
    
          // Set JWT as an HTTP-Only cookie
             res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
                sameSite: 'strict', // Prevent CSRF attacks
                maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
            });
}

export default generateToken;

