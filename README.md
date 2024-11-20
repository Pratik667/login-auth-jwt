# login-auth-jwt
Login Authentication using Json Web Token (JWT).

**JWT (JSON Web Token) Authentication** is a method for securely transmitting information between parties (such as a client and a server) as a JSON object. It is commonly used in web applications to verify a user's identity and provide secure access to resources.

---

### **How JWT Works**

1. **User Login:**
   - The user logs in by providing their credentials (e.g., username and password).

2. **Token Generation:**
   - The server authenticates the user's credentials and generates a JWT, which is then sent back to the client.  
   - The token contains three parts:
     - **Header:** Metadata about the token, such as the type (JWT) and signing algorithm (e.g., HMAC, RSA).
     - **Payload:** Claims (data) about the user, such as `user_id` or `role`. It does **not** store sensitive information like passwords.
     - **Signature:** A hashed combination of the header, payload, and a secret key to verify the token's integrity.

   Example JWT:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
   .eyJ1c2VyX2lkIjoxMjMsInJvbGUiOiJhZG1pbiJ9
   .X6IsT5S9ov2dKj0XOd4oTbXsJ44
   ```

3. **Client Stores Token:**
   - The client stores the JWT (typically in local storage, session storage, or cookies).

4. **Token Usage:**
   - For every request to protected resources, the client includes the token in the **Authorization** header:
     ```
     Authorization: Bearer <token>
     ```

5. **Token Verification:**
   - The server verifies the token's signature using the secret key and checks its validity (e.g., expiration date, issuer, etc.).

6. **Access Granted:**
   - If the token is valid, the server processes the request. Otherwise, it denies access.

---

### **Why Use JWT?**
1. **Stateless Authentication:**
   - The server does not need to store session data, as the JWT itself contains all the required information.

2. **Cross-Domain Compatibility:**
   - JWT can be used across different domains and platforms, making it ideal for modern web applications.

3. **Compact and Portable:**
   - JWT is a lightweight and self-contained format, easy to transmit between parties.

---

### **Use Cases**
- **Authentication:** Ensuring users are who they claim to be.
- **Authorization:** Managing access to resources based on user roles.
- **Data Exchange:** Securely transferring information between services.

---

### **Security Considerations**
1. **Keep the Secret Key Secure:**
   - The key used to sign and verify tokens must be kept secret.

2. **Use HTTPS:**
   - Always transmit JWT over a secure connection to prevent interception.

3. **Implement Token Expiration:**
   - Include an `exp` (expiration) claim in the payload to minimize the impact of stolen tokens.

4. **Avoid Storing Sensitive Data in the Token:**
   - Only include information that does not compromise security if exposed.

By using JWT authentication, you can achieve secure, stateless communication between your frontend (React, for example) and backend services.

Lets begin with code. Below is the Project Structure.
Project Structure
auth-project/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
├── frontend/
│   ├── index.html
│   ├── app.js
