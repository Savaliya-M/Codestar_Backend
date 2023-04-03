import express from "express";
import { addLanguage, getLanguages } from "../Controllers/Language";

const LanguageRouters = express.Router();

LanguageRouters.post("/addLanguage", addLanguage);
LanguageRouters.get("/getLanguages", getLanguages);

export default LanguageRouters;
