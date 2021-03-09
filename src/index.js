
import { aws_config } from './aws_export';

const register = (registerRequest) => {
    console.log(registerRequest);
}

import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
    UserPoolId: awsConfig.UserPoolId,
    ClientId: aws_config.clientId
})

const register = (registerRequest) => {
    userPool.signUp('username', 'password', attributeList, null, (
        err,
        result
    ) => {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}

var userData = {
    Username: 'username',
    Pool: userPool,
};

// const registerBtn = document.getElementById('register');
// registerBtn.addEventListener("click", () => {
//     register({ "name": "Kuba", "xyz": "foo" })
// });