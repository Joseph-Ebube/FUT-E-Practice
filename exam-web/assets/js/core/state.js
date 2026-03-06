export const state = {
    currentView: 'landing', // landing, courseInfo, exam, result
    selectedCourse: null,
    questions: [],
    userAnswers: {}, // Format: { questionId: selectedOptionIndex }
    flaggedQuestions: new Set(), // Track flagged IDs/indices
    currentIndex: 0,
    timeLeft: 0,
    isExamActive: false,
    
    // Methods to update state
    setCourse(course) {
        this.selectedCourse = course;
        this.questions = course.questions; // In real use, we'd shuffle/slice here
        this.timeLeft = course.defaultTime * 60;
        this.flaggedQuestions.clear(); // Reset for new exam
    },
    
    saveAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        localStorage.setItem('cbt_progress', JSON.stringify(this.userAnswers));
    },

    toggleFlag(index) {
        if (this.flaggedQuestions.has(index)) {
            this.flaggedQuestions.delete(index);
        } else {
            this.flaggedQuestions.add(index);
        }
    },

        saveToDisk() {
        const data = {
            userAnswers: this.userAnswers,
            currentIndex: this.currentIndex,
            isExamActive: this.isExamActive,
            timeLeft: this.timeLeft,
            selectedCourseId: this.selectedCourse?.id
        };
        localStorage.setItem('cbt_state', JSON.stringify(data));
    },

    loadFromDisk() {
        const saved = localStorage.getItem('cbt_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(this, parsed);
            return true;
        }
        return false;
    }
};

