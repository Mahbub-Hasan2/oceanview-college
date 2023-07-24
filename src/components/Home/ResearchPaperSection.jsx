import React from 'react';


const recommendedPapers = [
    {
      title: "Advancements in Environmental Science",
      authors: "John Doe, Jane Smith",
      link: "https://example.com/paper1.pdf",
    },
    {
      title: "Innovations in Artificial Intelligence",
      authors: "Alice Johnson, Bob Wilson",
      link: "https://example.com/paper2.pdf",
    },
    {
      title: "Exploring Renewable Energy Sources",
      authors: "Michael Brown",
      link: "https://example.com/paper3.pdf",
    },
    // Add more recommended papers as needed
  ];

const ResearchPaperSection = () => {
  return (
    <div className="research-paper-section p-4 md:p-8">
      <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">Recommended Research Papers</h2>
      <ul className="paper-list">
        {recommendedPapers.map((paper, index) => (
          <li key={index} className="paper-item mb-2">
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link text-blue-600 hover:underline">{paper.title}</a>
            <span className="paper-authors text-gray-600 ml-2">- {paper.authors}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPaperSection;
