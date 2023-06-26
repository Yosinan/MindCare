import React, { useState } from 'react';

const faqStyles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  question: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  answer: {
    marginBottom: '20px',
  },
};

function FAQ() {
  const [answersVisible, setAnswersVisible] = useState([]);

  const toggleAnswerVisibility = (index) => {
    setAnswersVisible((prevVisible) => {
      const updatedVisible = [...prevVisible];
      updatedVisible[index] = !prevVisible[index];
      return updatedVisible;
    });
  };

  const renderAnswer = (answer, index) => {
    const isVisible = answersVisible[index];
    return (
      <p
        key={`answer-${index}`}
        style={{ ...faqStyles.answer, display: isVisible ? 'block' : 'none' }}
      >
        {answer}
      </p>
    );
  };

  const renderQuestion = (question, index) => (
    <div key={`question-${index}`}>
      <h3
        style={faqStyles.question}
        onClick={() => toggleAnswerVisibility(index)}
      >
        {question.question}
      </h3>
      {renderAnswer(question.answer, index)}
    </div>
  );

  const faqData = [
    {
      question: 'Question: How can I manage stress effectively?',
      answer:
        'Answer: Managing stress effectively is crucial for maintaining good mental health. Here are some strategies you can try:...',
    },
    {
      question: 'Question: How can I improve my sleep quality?',
      answer:
        'Answer: Getting enough quality sleep is crucial for overall well-being. Here are some tips to improve your sleep quality:...',
    },
    {
      question: 'Question: How can I improve my focus and concentration?',
      answer:
        'Answer: Improving focus and concentration can enhance productivity and overall cognitive performance. Here are some strategies you can try:...',
    },
    {
      question: 'Question: How do I practice self-care?',
      answer:
        'Answer: Practicing self-care is essential for your well-being. Here are some self-care tips you can incorporate into your routine:...',
    },
    {
      question: 'Question: How can I manage work-life balance?',
      answer:
        'Answer: Achieving a healthy work-life balance is important. Here are some strategies to help you manage work and personal life effectively:...',
    },
    {
      question: 'Question: How do I build resilience?',
      answer:
        'Answer: Building resilience is crucial for navigating life challenges. Here are some ways to develop resilience:...',
    },
    {
      question: 'Question: How can I improve my communication skills?',
      answer:
        'Answer: Effective communication is essential in personal and professional relationships. Here are some tips to enhance your communication skills:...',
    },
    {
      question: 'Question: How do I set realistic goals?',
      answer:
        'Answer: Setting realistic goals is important for success and personal growth. Here are some steps to help you set achievable goals:...',
    },
    {
      question: 'Question: How can I manage my time effectively?',
      answer:
        'Answer: Time management skills are valuable for productivity. Here are some techniques to help you manage your time effectively:...',
    },
    {
      question: 'Question: How do I cope with change?',
      answer:
        'Answer: Dealing with change can be challenging. Here are some strategies to help you cope with change and adapt effectively:...',
    },
  ];

  return (
    <div style={faqStyles.container}>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((entry, index) => renderQuestion(entry, index))}
    </div>
  );
}

export default FAQ;
