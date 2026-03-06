import { LandingView } from '../ui/landing.js';
import { CourseInfoView } from '../ui/courseInfo.js'; // Ensure this is imported
import { ExamView } from '../ui/exam.js';
import { ResultView } from '../ui/result.js';
import { state } from '../core/state.js';

export const Router = {
    // Map the string keys to the View objects
    routes: {
        landing: LandingView,
        courseInfo: CourseInfoView,
        exam: ExamView,
        result: ResultView
    },

    navigate(viewName) {
        state.currentView = viewName;
        window.location.hash = viewName; // Changes URL to #courseInfo
        this.renderCurrent();
    },

    renderCurrent() {
        const view = this.routes[state.currentView];
        if (view) {
            console.log(`Navigating to: ${state.currentView}`); // Debugging line
            view.render();
        } else {
            console.error(`Route "${state.currentView}" not found!`);
        }
    }
};