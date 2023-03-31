import express from 'express';
import { addLanguage } from "../Controllers/Language"

const LanguageRouters = express.Router();

LanguageRouters.post('/addLanguage', addLanguage);

export default LanguageRouters;



