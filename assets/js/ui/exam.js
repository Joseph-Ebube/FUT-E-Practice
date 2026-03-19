import { state } from '../core/state.js';
import { engine } from '../core/engine.js';

export const ExamView = {
    render() {
        const q = state.questions[state.currentIndex];
        const root = document.getElementById('main-layout');

        root.innerHTML = `
            <div class="flex flex-col min-h-screen bg-gray-100">

                <!-- Top Header -->
                <header class="bg-[#1b3f1a] text-white px-3 py-1 flex justify-between items-center text-[10px] md:text-xs">
                    <div class="flex space-x-3 items-center">
                        <button onclick="window.navigateHome()" class="hover:underline flex items-center gap-1">
                            <i class="fas fa-sign-out-alt"></i> Log Out
                        </button>
                        <button onclick="window.toggleCalc()" class="hover:text-[#d4af37] flex items-center gap-1">
                            <i class="fas fa-calculator"></i> Calculator
                        </button>
                        <button onclick="window.toggleFlag()" class="hover:text-[#d4af37] flex items-center gap-1 transition-colors">
                            <i class="fas fa-bookmark ${state.flaggedQuestions.has(state.currentIndex) ? 'text-[#d4af37]' : ''}"></i> 
                            Bookmark 
                            <span class="ml-1 px-1 bg-[#d4af37] text-[#064e3b] rounded-full text-[9px]">
                                ${state.flaggedQuestions.size}
                            </span>
                        </button>
                    </div>
                </header>

                <!-- Control Bar -->
                <div class="bg-[#245c23] px-4 py-2 flex justify-between items-center shadow-md">

                    <div></div>

                    <button onclick="window.submitExam()" 
                        class="bg-[#a63a1b] text-white px-6 py-1 rounded-full font-semibold flex items-center gap-2 border border-white/30 hover:bg-[#8e3116] transition-colors text-sm">
                        <i class="fas fa-check-circle"></i> Submit
                    </button>

                    <div class="relative flex items-center">
                        <div id="timer-display" 
                            class="bg-[#a63a1b] text-white px-8 py-1 rounded-full border-4 border-gray-600 font-mono text-lg font-bold min-w-[120px] text-center">
                            ${engine.formatTime(state.timeLeft)}
                        </div>
                        <div class="absolute -right-2 w-5 h-5 bg-orange-600 rounded-full border-2 border-white"></div>
                    </div>
                </div>

                <!-- Main Content -->
                <main class="flex-grow flex flex-col max-w-6xl mx-auto w-full bg-white shadow-2xl mt-4">

                    <!-- Subject Tag -->
                    <div class="bg-gray-100 border-b">
                        <div class="bg-[#1b3f1a] text-white px-8 py-2 font-semibold text-sm w-fit"
                            style="clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);">
                            
                        </div>
                    </div>

                    <!-- Question Area (Now Fully Expands) -->
                    <div class="p-10 flex-grow">

                        <div class="flex items-center gap-4 mb-8">
                            <i class="fas fa-chevron-down text-gray-400"></i>
                            <h2 class="text-lg font-bold">
                                Question <span class="ml-4">${state.currentIndex + 1}/${state.questions.length}</span>
                            </h2>
                            <button class="text-gray-400 hover:text-black">
                                <i class="fas fa-volume-up text-2xl"></i>
                            </button>
                        </div>

                

                        <p class="text-2xl mb-12 text-gray-800 font-medium leading-relaxed">
                            ${q.text}
                        </p>

                        <div class="space-y-8 ml-6">
                            ${q.options.map((opt, i) => {
                                const letter = String.fromCharCode(65 + i);
                                const isSelected = state.userAnswers[state.currentIndex] === i;
                                return `
                                    <label class="flex items-center space-x-6 cursor-pointer group w-fit">
                                        <span class="font-bold text-gray-700 w-4 text-lg">${letter}</span>
                                        <div class="relative flex items-center justify-center">
                                            <input type="radio" name="cbt-opt" 
                                                class="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-[#1f4d1d] transition-all cursor-pointer"
                                                ${isSelected ? 'checked' : ''}
                                                onclick="window.selectOption(${i})">
                                            ${isSelected ? '<div class="absolute w-3 h-3 bg-[#1f4d1d] rounded-full"></div>' : ''}
                                        </div>
                                        <span class="text-xl text-gray-700 group-hover:text-[#123a78] transition-colors">
                                            ${opt}
                                        </span>
                                    </label>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Bottom Navigation (Now Scrolls With Page) -->
                    <div class="p-6 border-t bg-gray-50">

                        <div class="flex gap-4 mb-6">
                            <button onclick="window.prevQuestion()" 
                                class="bg-[#0f2d5c] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all text-sm">
                                <i class="fas fa-chevron-left"></i> Previous
                            </button>
                            <button onclick="window.nextQuestion()" 
                                class="bg-[#1f4d1d] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all text-sm">
                                Next <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div class="border rounded-sm overflow-hidden">
                            <div class="bg-gray-600 text-white p-1 text-[10px] font-bold px-3 uppercase tracking-wider">
                                Attempted ${Object.keys(state.userAnswers).length}/${state.questions.length}
                            </div>

                            <div class="grid grid-cols-10 md:grid-cols-20">
                                ${state.questions.map((_, i) => {
                                    const answered = state.userAnswers[i] !== undefined;
                                    const flagged = state.flaggedQuestions.has(i);
                                    const current = state.currentIndex === i;
                                    
                                    return `
                                        <div onclick="window.goToQuestion(${i})" 
                                            class="border p-2 text-center text-xs cursor-pointer transition-colors h-10 flex items-center justify-center font-bold
                                            ${current ? 'border-b-4 border-b-[#0a1f3f] text-[#0a1f3f]' : 'text-gray-600'}
                                            ${flagged ? 'bg-orange-400 text-white' : (answered ? 'bg-green-100 text-green-800' : 'bg-white')}">
                                            ${i + 1}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        `;
        if (window.renderMath) window.renderMath();
    },


    handleSelectOption(idx) {
        state.saveAnswer(state.currentIndex, idx);
        this.render();
    },
    handleToggleFlag() {
        state.toggleFlag(state.currentIndex);
        this.render();
    },
    handleGoTo(idx) {
        state.currentIndex = idx;
        this.render();
    }
};