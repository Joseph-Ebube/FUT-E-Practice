import { state } from '../core/state.js';
import { engine } from '../core/engine.js';
import { Router } from '../app/router.js';

export const CourseInfoView = {
    render() {
        const course = state.selectedCourse;
        const root = document.getElementById('main-layout');
        
        root.innerHTML = `
            <div class="max-w-3xl mx-auto py-12 px-4">
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                 
    <div class="max-w-2xl mx-auto p-6">
        <div class="bg-white rounded-lg shadow-xl border-l-8 border-[#d4af37] p-8">
            <h2 class="text-2xl font-bold text-[#064e3b] mb-4">Examination Instructions</h2>
            
            <div class="bg-red-50 border border-red-200 p-4 rounded-md mb-6">
                <h4 class="text-red-800 font-bold flex items-center gap-2 uppercase text-sm">
                    <i class="fas fa-exclamation-triangle"></i> Security Protocol
                </h4>
                <ul class="text-xs text-red-700 mt-2 list-disc ml-5 space-y-1">
                    <li>Do NOT switch tabs or minimize the browser.</li>
                    <li>Refreshing the page will be logged as a security incident.</li>
                    <li>The exam will auto-submit once the timer reaches 00:00.</li>
                </ul>
            </div>

           
        </div>
    </div>
                    <div class="bg-[#3e7d37] p-8 text-white">
                        <button onclick="navigateHome()" class="text-sm opacity-80 hover:opacity-100 mb-4 flex items-center gap-2">
                            <i class="fas fa-arrow-left"></i> Back to Courses
                        </button>
                        <h1 class="text-3xl font-bold">${course.code}: ${course.title}</h1>
                        <p class="opacity-90 mt-2">${course.description}</p>
                    </div>

                    <div class="p-8 space-y-8">
                        <div class="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-xl border border-dashed border-gray-300">
                            <h3 class="font-bold mb-4 flex items-center gap-2">
                                <i class="fas fa-sliders-h"></i> Customize Practice
                            </h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm text-gray-500 mb-1">Number of Questions</label>
                                    <input type="number" id="custom-qty" value="${course.data.questions.length}" max="${course.data.questions.length}" min="1"
                                           class="w-full p-2 border rounded dark:bg-slate-800">
                                </div>
                                <div>
                                    <label class="block text-sm text-gray-500 mb-1">Duration (Minutes)</label>
                                    <input type="number" id="custom-time" value="${course.data.defaultTime}"
                                           class="w-full p-2 border rounded dark:bg-slate-800">
                                </div>
                            </div>
                        </div>

                        <button id="start-btn" class="w-full bg-[#3e7d37] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#2d5a27] shadow-lg transition-all">
                            Start Exam Session
                        </button>
                    </div>
                </div>
            </div>

            
        `;



        this.attachEvents();
    },


attachEvents() {
        window.navigateHome = () => Router.navigate('landing');
        
        document.getElementById('start-btn').onclick = () => {
            const customQty = parseInt(document.getElementById('custom-qty').value);
            const customTime = parseInt(document.getElementById('custom-time').value);
            
            const slicedData = { 
                ...state.selectedCourse.data,
                defaultTime: customTime,
                questions: state.selectedCourse.data.questions.slice(0, customQty)
            };
            
            // CRITICAL: Initialize security BEFORE starting the exam flow
            engine.initSecurity(); 
            engine.startExam(slicedData);
        };
    }
}