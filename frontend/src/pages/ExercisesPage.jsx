import React, { useState } from "react";
import MindfulnessExercise from "./Exercises/Mindfulness";
import RelaxationExercise from "./Exercises/Relaxation";
import StressReductionTechnique from "./Exercises/StressReduction";
import "./ExercisesPage.css";

const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (event) => {
    setSelectedExercise(event.target.value);
  };

  const renderExercise = () => {
    switch (selectedExercise) {
      case "relaxation":
        return <RelaxationExercise />;
      case "mindfulness":
        return <MindfulnessExercise />;
      case "stressReduction":
        return <StressReductionTechnique />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>MindCare Exercises</h1>
      
    <ul className="exercise-links">
      <li><a href="#relaxation">Relaxation Exercise</a></li>
      <li><a href="#mindfulness">Mindfulness Exercise</a></li>
      <li><a href="#stress-reduction">Stress Reduction Technique</a></li>
    </ul>

    <select value={selectedExercise} onChange={handleExerciseSelect}>
      <option value="">Select an Exercise</option>
      <option value="relaxation" id="relaxation">Relaxation Exercise</option>
      <option value="mindfulness" id="mindfulness">Mindfulness Exercise</option>
      <option value="stressReduction" id="stress-reduction">Stress Reduction Technique</option>
    </select>

    <div className="exercise-container">{renderExercise()}</div>

      {/* <select value={selectedExercise} onChange={handleExerciseSelect}>
        <option value="">Select an Exercise</option>
        <option value="relaxation">Relaxation Exercise</option>
        <option value="mindfulness">Mindfulness Exercise</option>
        <option value="stressReduction">Stress Reduction Technique</option>
      </select>

      <div className="exercise-container">{renderExercise()}</div> */}
    </div>
  );
};

export default ExercisesPage;
