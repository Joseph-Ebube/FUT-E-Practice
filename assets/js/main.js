import { state } from './core/state.js';
import { engine } from './core/engine.js';
import { Router } from './app/router.js';
import { ResultView } from './ui/result.js';
import { LandingView } from './ui/landing.js';
import { CourseInfoView } from './ui/courseInfo.js';
import { ExamView } from './ui/exam.js';
import { Calculator } from './ui/components/calculator.js';

// EXPOSE TO WINDOW (Fixes ReferenceErrors)
window.state = state;
window.ResultView = ResultView;

// Global Actions
window.setResultTab = (tab) => { ResultView.activeTab = tab; ResultView.render(); };
window.goToReviewQuestion = (idx) => { state.currentIndex = idx; ResultView.render(); };
window.selectCourse = (id) => LandingView.handleSelect(id);
window.startExam = () => {
    engine.initSecurity(); // Start security FIRST
    engine.startExam(state.selectedCourse); // Then start exam
};
window.navigateHome = () => { state.clearDisk(); Router.navigate('landing'); };
window.selectOption = (idx) => ExamView.handleSelectOption(idx);
window.toggleFlag = () => ExamView.handleToggleFlag();
window.goToQuestion = (idx) => ExamView.handleGoTo(idx);
window.nextQuestion = () => engine.nextQuestion();
window.prevQuestion = () => engine.prevQuestion();
window.submitExam = () => engine.submitExam();
window.toggleCalc = () => Calculator.toggle();
window.calcInput = (val) => Calculator.handleInput(val);

window.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Calculator
    const calcContainer = document.createElement('div');
    calcContainer.innerHTML = Calculator.render();
    document.body.appendChild(calcContainer);
    
    // 2. Resume Session Logic
    const hasSavedState = state.loadFromDisk();
    
    if (hasSavedState && state.isExamActive) {
        // RE-INITIALIZE security and timer after a refresh
        engine.initSecurity(); 
        engine.startTimer();
        Router.navigate('exam');
    } else {
        // Standard start
        Router.navigate('landing');
    }

    // 3. Handle Browser Back/Forward buttons
    window.onpopstate = () => {
        const hash = window.location.hash.replace('#', '') || 'landing';
        // Block navigation if exam is active to prevent accidental exit
        if (state.isExamActive && hash !== 'exam') {
            if (confirm("Leaving this page will submit your exam. Continue?")) {
                engine.submitExam();
            } else {
                window.location.hash = 'exam'; // Force them back
            }
        } else {
            Router.navigate(hash);
        }
    };
});