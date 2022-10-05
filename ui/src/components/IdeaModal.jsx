import React from 'react';

import ButtonOutline from './ButtonOutline.jsx';

const IdeaModal = function IdeaModalComponent({
  open,
  idea,
  handleModalClose,
}) {
  if (!idea) return null;

  return (
    <div className="modal relative w-full max-w-sm">
      <div
        className="modal__backdrop fixed top-0 left-0 w-screen h-screen bg-slate-700 opacity-80 z-0"
        onClick={handleModalClose}
      />

      <article className="idea fixed left-1/2 w-full max-w-xl h-auto bg-slate-200 p-5 border z-10 translate-x-[-50%]">
        <header className="idea__header flex justify-between mb-2">
          <h3 className="idea__title font-bold">{idea.title}</h3>

          <ButtonOutline onClick={handleModalClose}>Close</ButtonOutline>
        </header>

        <p className="idea__description mb-5">{idea.description}</p>

        <div className="idea__actions">
          <ButtonOutline>Archive</ButtonOutline>
          <ButtonOutline>Delete</ButtonOutline>
        </div>
      </article>
    </div>
  );
};

export default IdeaModal;
