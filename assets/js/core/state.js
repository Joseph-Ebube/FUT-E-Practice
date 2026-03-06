export const state = {
    currentView: 'landing',
    selectedCourse: null,
    questions: [],
    userAnswers: {},
    flaggedQuestions: new Set(),
    currentIndex: 0,
    timeLeft: 0,
    isExamActive: false,
    
    setCourse(course) {
        this.selectedCourse = course;
        this.questions = course.questions;
        this.timeLeft = course.defaultTime * 60;
        this.userAnswers = {};
        this.currentIndex = 0;
        this.flaggedQuestions.clear();
        this.saveToDisk();
    },
    
    saveAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        this.saveToDisk();
    },

    saveToDisk() {
        const data = {
            userAnswers: this.userAnswers,
            currentIndex: this.currentIndex,
            isExamActive: this.isExamActive,
            timeLeft: this.timeLeft,
            selectedCourse: this.selectedCourse,
            questions: this.questions
        };
        localStorage.setItem('cbt_state', JSON.stringify(data));
    },

    loadFromDisk() {
        const saved = localStorage.getItem('cbt_state');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(this, data);
            return true;
        }
        return false;
    },

    clearDisk() {
        localStorage.removeItem('cbt_state');
    }
};