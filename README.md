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


-----------------------------------------------------------------------------
JST Token
 {"message":"Access granted","user":{"id":"673dce50688fdb1faf08b899","username":"psm222","iat":1732103866,"exp":1732107466}}
The given format is a JSON response, likely sent by the backend after verifying a JWT (JSON Web Token). Here's a breakdown of its structure:

---

### **Structure Explanation**

1. **`message`:** 
   - Contains a status message or confirmation.
   - In this case: `"Access granted"`, indicating that the user successfully accessed a protected route after token verification.

2. **`user`:**
   - Contains details about the authenticated user extracted from the decoded JWT. This object includes:
     - **`id`:**
       - A unique identifier for the user (e.g., their MongoDB ObjectId).
       - `"673dce50688fdb1faf08b899"` is an example of this identifier.
     - **`username`:**
       - The username of the authenticated user, here `"psm222"`.
     - **`iat` (Issued At Time):**
       - A Unix timestamp indicating when the JWT was issued.
       - `1732103866` corresponds to a specific time and date in seconds since January 1, 1970 (UTC).
     - **`exp` (Expiration Time):**
       - A Unix timestamp indicating when the JWT will expire.
       - `1732107466` indicates the token’s expiration time in seconds since January 1, 1970 (UTC).

---

### **Purpose of Each Field**

- **`id`:** Used to identify the user in the database.
- **`username`:** Gives context to the user's identity for the response.
- **`iat` and `exp`:** Part of the JWT standard claims:
  - **`iat`:** Helps validate when the token was created.
  - **`exp`:** Ensures that the token expires after a certain period, improving security.

---

### **Example Context**

1. **Frontend Perspective:**
   - When the frontend calls a protected API, the backend validates the token and sends this JSON back.
   - The frontend can use this information to display user-specific content (e.g., the username).

2. **Backend Perspective:**
   - After decoding the token, the backend includes the extracted payload (`id`, `username`) in the response to confirm that the user is authenticated.

---

### **JWT Token Workflow**

1. User logs in and receives a JWT (e.g., containing `id`, `username`, etc.).
2. When accessing a protected route, the user includes the JWT in the `Authorization` header.
3. Backend verifies the JWT:
   - If valid:
     - Returns the decoded payload (as shown in this example) to the client.
   - If invalid or expired:
     - Returns an error message like `{"message": "Invalid or expired token"}`.

---

Let me know if you'd like further clarification or want to decode JWT tokens manually!