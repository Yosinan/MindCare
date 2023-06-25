import React, { useState } from 'react';
import MindfulnessExercise from './Exercises/Mindfulness';
import RelaxationExercise from './Exercises/Relaxation';
import StressReductionTechnique from './Exercises/StressReduction';
import './ExercisesPage.css';

const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (exerciseName) => {
    setSelectedExercise(exerciseName);
  };

  const renderExercise = () => {
    switch (selectedExercise) {
      case 'relaxation':
        return <RelaxationExercise />;
      case 'mindfulness':
        return <MindfulnessExercise />;
      case 'stressReduction':
        return <StressReductionTechnique />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Exercises Page</h1>
      {/*  other UI elements */}
      <ul>
        <li onClick={() => handleExerciseSelect('relaxation')}>Relaxation Exercise</li>
        <li onClick={() => handleExerciseSelect('mindfulness')}>Mindfulness Exercise</li>
        <li onClick={() => handleExerciseSelect('stressReduction')}>Stress Reduction Technique</li>
      </ul>
      <div className="exercise-container">
        <div className={`exercise ${selectedExercise === 'relaxation' ? 'selected' : ''}`}>
          <RelaxationExercise />
        </div>
        <div className={`exercise ${selectedExercise === 'mindfulness' ? 'selected' : ''}`}>
          <MindfulnessExercise />
        </div>
        <div className={`exercise ${selectedExercise === 'stressReduction' ? 'selected' : ''}`}>
          <StressReductionTechnique />
        </div>
      </div>
      {renderExercise()}
    </div>
  );
};

export default ExercisesPage;
