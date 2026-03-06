import { Registry } from '../courses/registry.js';
import { Router } from '../app/router.js';
import { state } from '../core/state.js';

export const LandingView = {
    render() {
        const root = document.getElementById('main-layout');
        
        // Use a simple string for the onclick to avoid syntax errors in the HTML attribute
        root.innerHTML = `
            <div class="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
                <header class="text-center mb-12">
                    <h1 class="text-4xl font-extrabold text-[#2d5a27] mb-2 uppercase tracking-tighter">FUT Minna</h1>
                    <p class="text-gray-600 tracking-widest font-semibold text-sm">CBT PRACTICE ENGINE</p>
                </header>

                <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${Registry.map(course => `
                        <div class="bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#3e7d37] hover:shadow-md transition-all cursor-pointer" 
                             onclick="window.selectCourse('${course.id}')">
                            <h3 class="text-xl font-bold text-slate-800">${course.code}</h3>
                            <p class="text-gray-500 mb-4">${course.title}</p>
                            <div class="flex gap-2">
                                <span class="text-xs bg-gray-100 px-2 py-1 rounded font-medium">Questions: ${course.data.questions.length}</span>
                                <span class="text-xs bg-gray-100 px-2 py-1 rounded font-medium">Time: ${course.data.defaultTime}m</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    handleSelect(courseId) {
        console.log("Course selected:", courseId); // Debugging log
        const course = Registry.find(c => c.id === courseId);
        if (course) {
            state.selectedCourse = course;
            Router.navigate('courseInfo');
        } else {
            console.error("Course not found in Registry:", courseId);
        }
    }
};