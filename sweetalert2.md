```bash
npm i sweetalert2@6.6.1
```

```js
import Swal from "sweetalert2";

/////////////////////////////////////////
//////// EXAMPLE ////////////////////////
/////////////////////////////////////////

  axios
      .post("/api/auth/login", requestBody)
      .then((response) => {
        const token = response.data.authToken;
        Swal.fire("You are logged in"); // copy this!!!!!!!!!!!!!!!!!!
        storeToken(token);
        console.log(token)
        verifyStoredToken().then(() => {
          navigate("/");
        });

```
