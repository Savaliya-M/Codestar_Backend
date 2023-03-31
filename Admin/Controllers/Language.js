import Languages from "../Models/language";

const addLanguage = async (req, res, next) => {
  const { LanguageName, imageUrl, Questions } = req.body;
  let language;
  try {
    language = await Languages.findOne({ LanguageName });
  } catch (err) {
    console.log(err);
  }
  if (language) {
    return res.status(400).json({ message: "Language already exists" });
  }

  try {
    language = await Languages.create({
      LanguageName,
      imageUrl,
      Questions,
    });
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ language });
};

export { addLanguage };
