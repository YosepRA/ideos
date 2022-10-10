import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import IdeaCard from './IdeaCard.jsx';
import IdeaModal from './IdeaModal.jsx';
import Pagination from './Pagination.jsx';
import { useGetIdeasQuery } from './hooks/queries.js';

const IdeaList = function IdeaListComponent() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const { isLoading, data: ideas, refetch } = useGetIdeasQuery(currentPage);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const handleModalOpen = (idea) => {
    setModalOpen(true);
    setModalContent(idea);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const cards = ideas.data.map((idea) => (
    <IdeaCard key={idea._id} idea={idea} handleModalOpen={handleModalOpen} />
  ));

  return (
    <section className="ideas">
      <IdeaModal
        open={modalOpen}
        idea={modalContent}
        handleModalClose={handleModalClose}
      />

      <div className="ideas__list grid gap-3 mb-10 sm:grid-cols-2 md:grid-cols-3">
        {cards}
      </div>

      <Pagination
        baseUrl="/"
        currentPage={currentPage}
        totalPages={ideas.totalPages}
      />
    </section>
  );
};

export default IdeaList;
