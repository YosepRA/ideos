import React, { useState, useMemo } from 'react';

import IdeaCard from './IdeaCard.jsx';
import IdeaModal from './IdeaModal.jsx';
import { generateIdea } from '../utilities/helpers.js';

const IdeaList = function IdeaListComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (idea) => {
    setModalOpen(true);
    setModalContent(idea);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const amount = 10;
  const fakeIdea = useMemo(() => generateIdea(amount), [amount]);

  const cards = fakeIdea.map((idea) => (
    <IdeaCard key={idea._id} idea={idea} handleModalOpen={handleModalOpen} />
  ));

  return (
    <section className="ideas">
      <IdeaModal
        open={modalOpen}
        idea={modalContent}
        handleModalClose={handleModalClose}
      />

      <div className="ideas__list grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {cards}
      </div>
    </section>
  );
};

export default IdeaList;
