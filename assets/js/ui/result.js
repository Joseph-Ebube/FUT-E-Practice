import { state } from '../core/state.js';
import { Router } from '../app/router.js';


export const ResultView = {
    activeTab: 'summary',
    // ui/result.js

render() {
    const root = document.getElementById('main-layout');
    const stats = this.calculateStats();

    root.innerHTML = `
        <div class="flex flex-col h-screen bg-gray-100">
            <nav class="bg-[#064e3b] text-white flex justify-between items-center border-b border-[#d4af37] px-4">
                <div class="flex">
                    <button onclick="window.setResultTab('summary')" 
                        class="px-6 py-3 font-bold ${this.activeTab === 'summary' ? 'bg-white text-[#064e3b]' : 'text-[#d4af37]'}">
                        SUMMARY
                    </button>
                    <button onclick="window.setResultTab('correction')" 
                        class="px-6 py-3 font-bold ${this.activeTab === 'correction' ? 'bg-white text-[#064e3b]' : 'text-[#d4af37]'}">
                        CORRECTIONS
                    </button>
                </div>
                
                <button onclick="window.navigateHome()" 
                    class="bg-black-700 hover:bg-blue-3000 text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                    <i class="fas fa-home"></i> 
                    <span class="hidden sm:inline">EXIT TO HOME</span>
                </button>
            </nav>

            <main class="flex-grow overflow-y-auto p-6">
                ${this.activeTab === 'summary' ? this.renderSummary(stats) : this.renderCorrection()}
            </main>
        </div>
    `;

    if (window.renderMath) window.renderMath(); // Keep your KaTeX trigger
},


    calculateStats() {
        const total = state.questions.length;
        let correct = 0;
        const topics = {};

        state.questions.forEach((q, i) => {
            const isCorrect = state.userAnswers[i] === q.answer;
            if (isCorrect) correct++;
            if (!topics[q.topic]) topics[q.topic] = { c: 0, t: 0 };
            topics[q.topic].t++;
            if (isCorrect) topics[q.topic].c++;
        });

        const timeUsed = (state.selectedCourse.defaultTime * 60) - state.timeLeft;
        return {
            score: correct,
            total,
            percentage: Math.round((correct / total) * 100),
            timeUsed: `${Math.floor(timeUsed/60)}m ${timeUsed%60}s`,
            avgTime: (timeUsed / total).toFixed(1) + 's',
            topics
        };
    },

    renderSummary(s) {
        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="bg-white p-10 rounded-xl shadow border-t-8 border-[#d4af37] text-center">
                    <h1 class="text-5xl font-black text-[#064e3b]">${s.percentage}%</h1>
                    <p class="text-gray-500 uppercase tracking-widest mt-2">Overall Score</p>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <div class="bg-gray-50 p-4 rounded"><span>Time Spent:</span> <b class="block text-[#064e3b]">${s.timeUsed}</b></div>
                        <div class="bg-gray-50 p-4 rounded"><span>Avg Speed:</span> <b class="block text-[#064e3b]">${s.avgTime}/q</b></div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded shadow">
                    <h3 class="font-bold mb-4">Topic Mastery</h3>
                    ${Object.entries(s.topics).map(([name, d]) => `
                        <div class="mb-3">
                            <div class="flex justify-between text-xs mb-1"><span>${name}</span><span>${Math.round(d.c/d.t*100)}%</span></div>
                            <div class="w-full bg-gray-100 h-2 rounded-full"><div class="bg-[#d4af37] h-full" style="width:${d.c/d.t*100}%"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
        `;
        // TRIGGER KATEX AFTER INJECTING HTML
        if (window.renderMath) {
            window.renderMath();
        }
    },
    

    renderCorrection() {
        const q = state.questions[state.currentIndex];
        const userAns = state.userAnswers[state.currentIndex];
        const isCorrect = userAns === q.answer;

        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="bg-white p-8 rounded shadow border-l-8 ${isCorrect ? 'border-green-500' : 'border-red-500'}">
                    <p class="text-lg font-bold mb-6">${q.text}</p>
                    <div class="space-y-3">
                        ${q.options.map((opt, i) => `
                            <div class="p-3 border rounded ${i === q.answer ? 'bg-green-100 border-green-500' : (i === userAns ? 'bg-red-100 border-red-500' : 'bg-gray-50')}">
                                ${String.fromCharCode(65+i)}. ${opt}
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-6 p-4 bg-yellow-50 text-sm border border-yellow-200">
                        <strong>Correction:</strong> ${q.explanation}
                    </div>
                </div>
                <div class="grid grid-cols-10 border bg-white shadow">
                    ${state.questions.map((_, i) => `
                        <div onclick="window.goToReviewQuestion(${i})" class="h-12 border flex flex-col items-center justify-center cursor-pointer ${state.currentIndex === i ? 'bg-[#d4af37]' : ''}">
                            <span class="text-[10px]">${i+1}</span>
                            <span class="font-bold ${state.userAnswers[i] === state.questions[i].answer ? 'text-green-600' : 'text-red-600'}">${state.userAnswers[i] === state.questions[i].answer ? '✓' : '✗'}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
           // TRIGGER KATEX AFTER INJECTING HTML
        if (window.renderMath) {
            window.renderMath();
        }
    }
    
};