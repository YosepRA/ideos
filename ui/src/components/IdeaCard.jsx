import React from 'react';

import ButtonOutline from './ButtonOutline.jsx';

const IdeaCard = function IdeaCardComponent({ idea, handleModalOpen }) {
  const { title, description } = idea;

  const handleArchive = () => {
    console.log('Archive handler');
  };

  const handleDelete = () => {
    console.log('Delete handler');
  };

  return (
    <article className="idea-card bg-white p-5 border shadow">
      <h3 className="idea-card__title text-xl font-bold font-serif mb-2">
        {title}
      </h3>

      <p className="idea-card__description mb-5">{description}</p>

      <ButtonOutline onClick={() => handleModalOpen(idea)}>
        Show More
      </ButtonOutline>
    </article>
  );
};

export default IdeaCard;
