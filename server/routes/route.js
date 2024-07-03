import { delSecret, getSecret, homepage, patchSecret, postSecret, putSecret } from "../controllers/controller.js";



export const route = (app) => {
    try {
        app.get("/", homepage);

        app.post("/get-secret", getSecret);

        app.post("/post-secret", postSecret);

        app.post("/put-secret", putSecret);

        app.post("/patch-secret", patchSecret);

        app.post("/delete-secret", delSecret);
    } catch (error) {

    }
}