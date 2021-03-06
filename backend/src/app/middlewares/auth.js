import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const [, token] = header.split(' ');

  try {
    const decodedToken = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decodedToken.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token is invalid' });
  }
};
