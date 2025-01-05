import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import "./submit.css";

const Submit = () => {
  const [formData, setFormData] = useState({
    name: "",
    artistname: "",
    year: "",
    title: "",
    media: "",
    message: "",
  });
  const [images, setImages] = useState([]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); 
    setImages([...images, ...files]); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher la soumission par défaut
  
    // Récupération directe du formulaire HTML
    const form = e.target;
  
    emailjs
      .sendForm(
        "service_3oa0t6m", // ID du service
        "template_en804ii", // ID du template
        form, // Envoi du formulaire directement
        "vJU5cmZi8SARgb-VJ" // ID utilisateur
      )
      .then((result) => {
        alert("Merci de votre contribution !");
        setImages([]); // Réinitialiser les images après soumission
        form.reset(); // Réinitialiser le formulaire
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Quelque chose s'est mal passé");
      });
  };

  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Votre Nom (optionnel):</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-element">
          <label>Nom, Prénom de l'auteur.ice.s:</label>
          <input name="artistname" value={formData.artistname} onChange={handleChange} required />
        </div>

        <div className="form-element">
          <label>Année(s) de réalisation:</label>
          <input name="year" value={formData.year} onChange={handleChange} required />
        </div>

        <div className="form-element">
          <label>Titre de l'œuvre:</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-element">
          <label>Type de Média:</label>
          <input name="media" value={formData.media} onChange={handleChange} required />
        </div>

        <div className="form-element">
          <label htmlFor="file-upload">
            <img src="./../../img/FILE.png" className="file-drop" alt="Upload Files" />
          </label>
          <input
            id="file-upload"
            type="file"
            name="images"
            multiple // Permet de sélectionner plusieurs fichiers
            style={{ display: "none" }} // Masquer l'input par défaut
            onChange={handleImageChange}
          />
          {images.length > 0 && (
            <ul>
              {images.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submit;
