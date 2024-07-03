import axios from "axios";
import dotenv from "dotenv"
dotenv.config({path: 'info.env'})

const API_URL = process.env.API_URL

const BearerToken = process.env.BEARER_TOKEN;

const config = {
  headers: { Authorization: `Bearer ${BearerToken}` },
};





export const homepage = (req, res) => {
    res.render("index.ejs", { content: "Waiting for data..." });
}

export const getSecret = async (req, res) => {
    console.log(API_URL);
    const searchId = req.body.id;
    try {
        const result = await axios.get(API_URL + "/secrets/" + searchId, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) });
    }
}

export const postSecret = async (req, res) => {
    // TODO 2: Use axios to POST the data from req.body to the secrets api servers.

    const secret = req.body.secret
    const score =  req.body.score

    const body = {
        secret: secret,
        score:score
    }
    
    try {
        const result = await axios.post(API_URL + "/secrets", body, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) })
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) });
        
    }

}

export const putSecret = async (req, res) => {
    const searchId = req.body.id;
    const body = {
        secret: secret,
        score:score
    }
    // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
    try {
        const result = await axios.put(API_URL + "/secrets/" + searchId, body, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) })
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) });
        
    }

}

export const patchSecret = async (req, res) => {
    const searchId = req.body.id;
    const body = {
        secret: secret,
        score:score
    }
    // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
    try {
        const result = await axios.patch(API_URL + "/secrets/" + searchId, body, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) })
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) });
        
    }
}

export const delSecret = async (req, res) => {
    const searchId = req.body.id;
    // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
    try {
        const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) })
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) });
        
    }
}