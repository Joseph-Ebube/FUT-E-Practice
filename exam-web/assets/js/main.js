import { Router } from './app/router.js';
import { LandingView } from './ui/landing.js';
import { CourseInfoView } from './ui/courseInfo.js';
import { ExamView } from './ui/exam.js';

import { engine } from './core/engine.js';
import { Calculator } from './ui/components/calculator.js';

// ... existing imports ...

// Add Calculator to the global window
window.toggleCalc = () => Calculator.toggle();
window.calcInput = (val) => Calculator.handleInput(val);

window.addEventListener('DOMContentLoaded', () => {
    // Inject calculator HTML into the body once
    const calcContainer = document.createElement('div');
    calcContainer.innerHTML = Calculator.render();
    document.body.appendChild(calcContainer);
    
    Router.navigate('landing');
});

// Attach UI-specific actions to global window so HTML onclicks work
window.selectCourse = (id) => LandingView.handleSelect(id);
window.startExam = () => CourseInfoView.handleStart();
window.navigateHome = () => Router.navigate('landing');
window.selectOption = (idx) => ExamView.handleSelectOption(idx);
window.toggleFlag = () => ExamView.handleToggleFlag();
window.goToQuestion = (idx) => ExamView.handleGoTo(idx);

// Expose these to the window so the HTML buttons can trigger them
window.nextQuestion = () => engine.nextQuestion();
window.prevQuestion = () => engine.prevQuestion();
window.submitExam = () => engine.submitExam();

// Also ensure these UI helpers are exposed for the navigation grid
window.goToQuestion = (index) => ExamView.handleGoTo(index);
window.toggleFlag = () => ExamView.handleToggleFlag();

window.addEventListener('DOMContentLoaded', () => {
    Router.navigate('landing');
    
    window.onpopstate = () => {
        const hash = window.location.hash.replace('#', '') || 'landing';
        Router.navigate(hash);
    };
});


