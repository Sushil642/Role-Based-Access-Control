
# RBAC

Role-Based Access Control (RBAC) is a system for managing permissions where users are assigned roles, and roles are granted specific access rights. This simplifies permission management by grouping users and permissions through roles.


## API Reference
1. Go to cd backend/ of project
2. In .env file write the PORT number, CONNECTION_STRING, JWT_SECRET
3. Now backend API is running on http://localhost:3000/

BASE_URL=http://localhost:3000/

#### To register 

```bash
POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| username, password ,role | `string` | **Required**. |

#### To Login

```bash
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| username,password     | `string` | **Required**.  |

#### For Details

```bash
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  `token`     | `string` | **Required**. this we will get after login.  |






## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`JWT_SECRET`
`CONNECTION_STRING`


## Installation

firstly do cd backend/

```bash
  npm install 
  npm run dev
```
Now the backend is running and Put the backend Base_url in 
frontend.

```bash
  npm install 
  npm start
```
    
## Feedback

If you have any feedback, please reach out to us at rajputsushil642@gmail.com


## 🚀 About Me
I'm a full stack developer...


# Hi, I'm Sushil Singh! 👋


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Sushil642)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sushil-singh-0a169b252/)







## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** Mongodb

## Screenshots

![image](https://github.com/user-attachments/assets/294179f6-24b1-48bd-90ff-a49283373928)
 Ss1:  Main HomePage 
 
![image](https://github.com/user-attachments/assets/867c04ce-907a-4a14-96a5-d692629d42ae)
 Ss2: Register page
 
![image](https://github.com/user-attachments/assets/c92e42ea-ab32-4cf4-9c57-d0ffa0d24c21)
 Ss3: Login Page
 
![image](https://github.com/user-attachments/assets/60eacf2a-53f3-424e-9da5-4e09c0ae67d0)
 Ss4:  Get Manger details(LoggedIn role : Admin)
 
![image](https://github.com/user-attachments/assets/53a18120-032a-492e-806d-d5faff206fc4)
Ss5:   Get User Details(LoggedIn role : Admin )





