import React, { useState } from 'react';

const faqStyles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 15px',
    fontFamily: 'open-sans, sans-serif',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
    color: '#434345',
    padding: '14px 50px 14px 24px',
    fontFamily: 'open sans,sans-serif',
    height: '10px', 
  },
  answer: {
    marginBottom: '20px',
    color: '#9b9b9b',
    font: '15px',
    padding: '24px 0px 0px 24px',
  },
  guide: {
    fontStyle: 'italic',
    marginTop: '10px',
    color: '#999',
  },
};


function FAQ() {
  const [answersVisible, setAnswersVisible] = useState([]);

  const renderAnswer = (answer, index) => {
    const isVisible = answersVisible[index];
    return (
      <div key={`answer-${index}`}>
        <p
          style={{ ...faqStyles.answer, display: isVisible ? 'block' : 'none' }}
        >
          {answer.content}
        </p>
        {answer.guide && (
          <p style={faqStyles.guide}>
            <strong>Guide:</strong> {answer.guide}
          </p>
        )}
      </div>
    );
  };

  const renderQuestion = (question, index) => {
    const isExpanded = answersVisible[index];

    const toggleAnswerVisibility = () => {
      setAnswersVisible((prevVisible) => {
        const updatedVisible = [...prevVisible];
        updatedVisible[index] = !prevVisible[index];
        return updatedVisible;
      });
    };

    return (
        <div key={`question-${index}`} style={{ border: '1px solid #ccc', padding: '', marginBottom: '' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: isExpanded ? '#58c56f' : '',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: isExpanded ? '#f9f9f9' : '',
          }}
          onClick={toggleAnswerVisibility}>
        
          <h3 style={{ ...faqStyles.question, margin: 0, color: isExpanded ? '#58c56f' : '' }}>
            {question.question}
          </h3>
          <span style={{ color: '#9b9b9b', fontWeight: 'bold' }}>
            {isExpanded ? '-' : '+'}
          </span>
        </div>
        {isExpanded && (
          <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '1px', marginTop: '10px' }}>
            {renderAnswer(question.answer, index)}
          </div>
        )}; 
      </div>
    //   <div key={`question-${index}`}>
    //     <div
    //       style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'space-between',
    //         backgroundColor: isExpanded ? '#58c56f' : '#434345',
    //         padding: '10px',
    //         borderRadius: '5px',
    //         cursor: 'pointer',
    //         borderBottom: '1px solid #ccc',
    //       }}
    //       onClick={toggleAnswerVisibility}>
         
    //       <h3 style={{...faqStyles.question,margin:0}} /*onClick={toggleAnswerVisibility}*/>
    //         {question.question}
    //       </h3>
    //       <span style={{color:'#9b9b9b',fontWeight:'bold'}}/*{faqStyles.plusMinus} onClick={toggleAnswerVisibility}*/>
    //         {isExpanded ? '-' : '+'}
    //       </span>
    //     </div>
    //     {isExpanded && renderAnswer(question.answer, index)}
    //   </div>
    );
  };

  const faqData = [
    {
      question: 'How can I manage stress effectively?',
      answer: {
        content:
          'Answer: Managing stress effectively is crucial for maintaining good mental health. Here are some strategies you can try:',
        guide: 'For more detailed guidance on stress management, you can refer to our Stress Management Guide.',
      },
    },
    {
      question: 'How can I improve my sleep quality?',
      answer: {
        content:
          'Answer: Getting enough quality sleep is crucial for overall well-being. Here are some tips to improve your sleep quality:',
        guide: 'For more detailed guidance on improving sleep, you can refer to our Sleep Improvement Guide.',
      },
    },
    {
      question: 'How can I improve my focus and concentration?',
      answer: {
        content:
          'Answer: Improving focus and concentration can enhance productivity and overall cognitive performance. Here are some strategies you can try:',
        guide: 'For more detailed guidance on improving focus and concentration, you can refer to our Focus and Concentration Guide.',
      },
    },
    {
      question: 'How do I practice self-care?',
      answer: {
        content:
          'Answer: Practicing self-care is essential for your well-being. Here are some self-care tips you can incorporate into your routine:',
        guide: 'For more detailed guidance on self-care practices, you can refer to our Self-Care Guide.',
      },
    },
    {
      question: 'How can I manage work-life balance?',
      answer: {
        content:
          'Answer: Achieving a healthy work-life balance is important. Here are some strategies to help you manage work and personal life effectively:',
        guide: 'For more detailed guidance on work-life balance, you can refer to our Work-Life Balance Guide.',
      },
    },
    {
      question: 'What are some techniques for stress reduction?',
      answer: {
        content:
          'Answer: Reducing stress is crucial for your mental well-being. Here are some effective techniques you can try:',
        guide: 'For more detailed guidance on stress reduction techniques, you can refer to our Stress Reduction Guide.',
      },
    },
    {
      question: 'How can I build resilience?',
      answer: {
        content:
          'Answer: Building resilience can help you cope with challenges. Here are some ways to enhance your resilience:',
        guide: 'For more detailed guidance on building resilience, you can refer to our Resilience Building Guide.',
      },
    },
    {
      question: 'How can I improve my communication skills?',
      answer: {
        content:
          'Answer: Effective communication is essential in various aspects of life. Here are some tips to enhance your communication skills:',
        guide: 'For more detailed guidance on improving communication skills, you can refer to our Communication Skills Guide.',
      },
    },
    {
      question: 'What are some strategies for time management?',
      answer: {
        content:
          'Answer: Managing your time efficiently can increase productivity. Here are some time management strategies you can implement:',
        guide: 'For more detailed guidance on time management, you can refer to our Time Management Guide.',
      },
    },
    {
      question: 'How can I develop a positive mindset?',
      answer: {
        content:
          'Answer: Cultivating a positive mindset can improve your overall well-being. Here are some ways to develop a positive mindset:',
        guide: 'For more detailed guidance on developing a positive mindset, you can refer to our Positive Mindset Guide.',
      },
    },
  ];

  return (
    // <div style={faqStyles.container}>
    //   <h1>Frequently Asked Questions</h1>
    //   {faqData.map((entry, index) => renderQuestion(entry, index))}
    // </div>
    <div style={{ ...faqStyles.container, textAlign: 'center' }}>
    <h1 style={{ marginBottom: '20px' }}>Frequently Asked Questions</h1>
    <div style={{ borderBottom: '1px solid #ccc' }}>
      {faqData.map(renderQuestion)}
    </div>
  </div>
  );
}

export default FAQ;
