import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //this gives us the token from among all the headers
    const isCustomenAuth = token.length < 500; //if token length is less than 500 then the token is our custom jwt token else its is of google auth

    let decodedData;

    if (token && isCustomenAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id; //this gives us the id of the user logged in by custom method
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; //this gives us the id of the user logged in using google
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
