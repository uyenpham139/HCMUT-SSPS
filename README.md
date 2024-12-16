# HCMUT-SSPS-SECO11-11

## Requirements
- Node.js v22.12.0 (Frontend)
- Java 23 (Backend)

## Back End
1. Go to Backend folder -> main -> java -> resources and change MongoDB URI in `application.properties`

```
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.gl0og.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

2. In the root BackEnd folder

```sh
.\mvnw install
.\mvnw spring-boot:run

```

## Front End
1. Go to https://edgestore.dev/ and create an account.
2. Then create a new project.
3. Create a `.env` file in the root location. Insert your project edgestore keys in this file like this:
    ```
    EDGE_STORE_ACCESS_KEY=your-access-key
    EDGE_STORE_SECRET_KEY=your-secret-key
    ```

4. In the root FrontEnd folder
   ```sh
   npm install
   npm run dev
   ```
   
