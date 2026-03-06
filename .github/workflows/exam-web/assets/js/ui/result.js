import { state } from '../core/state.js';
import { Router } from '../app/router.js';

export const ResultView = {
    render() {
        const results = this.calculateResults();
        const root = document.getElementById('main-layout');

        root.innerHTML = `
            <div class="max-w-4xl mx-auto p-8">
                <div class="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-10 text-center">
                    <h1 class="text-3xl font-bold mb-4 text-[#3e7d37]">Examination Result</h1>
                    <div class="text-6xl font-black mb-6">${results.score}%</div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                        <div class="p-4 bg-gray-50 dark:bg-slate-700 rounded">
                            <p class="text-sm text-gray-500">Correct Answers</p>
                            <p class="text-xl font-bold">${results.correct} / ${state.questions.length}</p>
                        </div>
                        <div class="p-4 bg-gray-50 dark:bg-slate-700 rounded">
                            <p class="text-sm text-gray-500">Time Spent</p>
                            <p class="text-xl font-bold">${results.timeUsed}</p>
                        </div>
                    </div>

                    <h3 class="font-bold text-lg mb-4 text-left border-b pb-2">Topic Breakdown</h3>
                    <div class="space-y-3 mb-10">
                        ${Object.entries(results.topics).map(([topic, data]) => `
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600 dark:text-gray-300">${topic}</span>
                                <div class="flex items-center gap-3">
                                    <div class="w-32 bg-gray-200 rounded-full h-2">
                                        <div class="bg-blue-500 h-2 rounded-full" style="width: ${(data.correct/data.total)*100}%"></div>
                                    </div>
                                    <span class="font-bold">${data.correct}/${data.total}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <button id="home-btn" class="bg-[#3e7d37] text-white px-10 py-3 rounded-full font-bold hover:bg-[#2d5a27]">
                        Practice Another Course
                    </button>
                </div>
            </div>
        `;

        document.getElementById('home-btn').onclick = () => {
            state.userAnswers = {};
            state.currentIndex = 0;
            Router.navigate('landing');
        };
    },

    calculateResults() {
        let correct = 0;
        const topicStats = {};

        state.questions.forEach((q, index) => {
            if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
            topicStats[q.topic].total++;

            if (state.userAnswers[index] === q.answer) {
                correct++;
                topicStats[q.topic].correct++;
            }
        });

        return {
            correct,
            score: Math.round((correct / state.questions.length) * 100),
            topics: topicStats,
            timeUsed: "12m 30s" // This would be calculated from state.timeLeft
        };
    },


    renderReview() {
    return state.questions.map((q, i) => {
        const userAns = state.userAnswers[i];
        const isCorrect = userAns === q.answer;
        
        return `
            <div class="p-4 border-b ${isCorrect ? 'bg-green-50' : 'bg-red-50'}">
                <p class="font-bold text-[#064e3b]">Q${i+1}: ${q.text}</p>
                <p class="text-sm mt-2">
                    Your Answer: <span class="${isCorrect ? 'text-green-700' : 'text-red-700'}">${q.options[userAns] || 'None'}</span>
                </p>
                ${!isCorrect ? `<p class="text-sm text-green-700 font-bold">Correct Answer: ${q.options[q.answer]}</p>` : ''}
                
                <div class="mt-3 p-3 bg-white border border-[#d4af37] rounded text-xs text-gray-600 italic">
                    <strong>Explanation:</strong> ${q.explanation}
                </div>
            </div>
        `;
    }).join('');
}
};

