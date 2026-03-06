import { state } from './state.js';
import { Router } from '../app/router.js';

export const engine = {
    timerInterval: null,

    startExam(courseData) {
        state.setCourse(courseData);
        state.isExamActive = true;
        this.startTimer();
        this.initSecurity(); // Initialize tab-switch detection
        Router.navigate('exam');
    },

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            if (state.timeLeft > 0) {
                state.timeLeft--;
                this.updateTimerUI();
                
                // 10-minute warning logic
                if (state.timeLeft === 600) {
                    alert("Attention: 10 minutes remaining!");
                }
            } else {
                this.submitExam();
            }
        }, 1000);
    },

    updateTimerUI() {
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = this.formatTime(state.timeLeft);
            // Visual pressure: turn timer red in last 5 minutes
            if (state.timeLeft < 300) {
                timerEl.classList.add('text-red-500', 'animate-pulse');
            }
        }
    },

    formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    },

    nextQuestion() {
        if (state.currentIndex < state.questions.length - 1) {
            state.currentIndex++;
            Router.renderCurrent();
        }
    },

    prevQuestion() {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            Router.renderCurrent();
        }
    },

    submitExam() {
        if (confirm("Are you sure you want to submit?")) {
            clearInterval(this.timerInterval);
            state.isExamActive = false;
            window.onblur = null; // Remove security listener
            Router.navigate('result');
        }
    },

 

        // Inside engine.js
    startExam(courseData) {
        // Create a copy and shuffle
        const shuffledQuestions = [...courseData.questions].sort(() => Math.random() - 0.5);
        
        state.setCourse({
            ...courseData,
            questions: shuffledQuestions
        });
        
        state.isExamActive = true;
        this.startTimer();
        Router.navigate('exam');
    },




    initSecurity() {
        // 1. Tab Switch Detection
        document.onvisibilitychange = () => {
            if (document.hidden && state.isExamActive) {
                alert("🔴 SECURITY ALERT: You left the exam tab. This incident has been recorded.");
            }
        };

        // 2. Prevent Refresh/Close
        window.onbeforeunload = (e) => {
            if (state.isExamActive) {
                e.preventDefault();
                e.returnValue = ''; // Standard requirement for modern browsers
            }
        };
    },

    stopSecurity() {
        window.onbeforeunload = null;
        document.onvisibilitychange = null;
    },

    submitExam() {
        if (confirm("Are you sure you want to submit?")) {
            this.stopSecurity(); // Turn off warnings so they can navigate to results
            clearInterval(this.timerInterval);
            state.isExamActive = false;
            state.clearDisk(); 
            Router.navigate('result');
        }
    }
};