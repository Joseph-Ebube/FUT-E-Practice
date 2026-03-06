export const Calculator = {
    isOpen: false,
    
    toggle() {
        this.isOpen = !this.isOpen;
        const calcEl = document.getElementById('calc-overlay');
        if (this.isOpen) {
            calcEl.classList.remove('hidden');
        } else {
            calcEl.classList.add('hidden');
        }
    },

    render() {
        return `
            <div id="calc-overlay" class="hidden fixed top-20 right-10 w-64 bg-slate-800 rounded-lg shadow-2xl z-50 border-2 border-[#d4af37] overflow-hidden">
                <div class="bg-[#064e3b] p-2 flex justify-between items-center cursor-move">
                    <span class="text-[#d4af37] text-xs font-bold">CBT CALCULATOR</span>
                    <button onclick="window.toggleCalc()" class="text-white hover:text-red-500">×</button>
                </div>
                <div class="p-3">
                    <input type="text" id="calc-display" readonly 
                        class="w-full bg-black text-green-400 text-right p-2 mb-2 font-mono text-xl border border-gray-600">
                    <div class="grid grid-cols-4 gap-1">
                        ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'].map(btn => `
                            <button onclick="window.calcInput('${btn}')" 
                                class="p-2 bg-slate-700 text-white hover:bg-slate-600 font-bold rounded ${btn === 'C' ? 'col-span-2' : ''} ${btn === '=' ? 'bg-[#d4af37] text-[#064e3b]' : ''}">
                                ${btn}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    handleInput(val) {
        const display = document.getElementById('calc-display');
        if (val === 'C') {
            display.value = '';
        } else if (val === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += val;
        }
    }
};