import React, { useState } from "react";
import "./submit.css";

const Submit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construction du lien mailto
    const mailtoLink = `mailto:example@example.com?subject=Contribution Atlas&body=${encodeURIComponent(
      `Nom : ${formData.name}\nArtist : ${formData.artistname}\nAnnée de réalisation : ${formData.year}\nTitre : ${formData.title}\nType de Média : ${formData.media}`
    )}`;

    // Ouvrir le client mail avec le lien mailto
    window.location.href = mailtoLink;
  };

  return (
    <form className="submit-form" onSubmit={handleSubmit}>
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

      <h1>Après avoir cliqué sur "Envoyer", veuillez ajouter vos fichiers en pièce jointe dans votre client email.</h1>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Submit;

