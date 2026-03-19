// calculator.js

export const Calculator = {
    isOpen: false,
    currentTab: 'sci',
    displayValue: '',
    memory: 0,
    lastAnswer: 0,
    history: [],
    angleMode: 'DEG',
    isKeyboardAttached: false, // prevent duplicate listeners

    toLaTeX(str) {
        if (!str) return '0';
        return str
            .replace(/\*/g, '\\times ')
            .replace(/\//g, '\\div ')
            .replace(/π/g, '\\pi ')
            .replace(/sqrt/g, '\\sqrt')
            .replace(/sin/g, '\\sin')
            .replace(/cos/g, '\\cos')
            .replace(/tan/g, '\\tan')
            .replace(/log/g, '\\log')
            .replace(/ln/g, '\\ln');
    },

    toggle() {
        const calcEl = document.getElementById('calc-overlay');
        if (!calcEl) {
            document.body.insertAdjacentHTML('beforeend', this.render());
            return this.toggle();
        }
        this.isOpen = !this.isOpen;
        calcEl.classList.toggle('hidden', !this.isOpen);
        if (this.isOpen) this.attachKeyboard();
    },

    setTab(tab) {
        if (this.currentTab === tab) return;
        try {
            if (this.displayValue && !['Error','NaN','Infinity'].includes(this.displayValue)) {
                if (tab === 'bin') {
                    const decimal = parseInt(this.displayValue, 10);
                    this.displayValue = isNaN(decimal) ? '' : decimal.toString(2);
                } else {
                    const binary = parseInt(this.displayValue, 2);
                    this.displayValue = isNaN(binary) ? '' : binary.toString(10);
                }
            }
        } catch {
            this.displayValue = 'Error';
        }
        this.currentTab = tab;
        this.updateUI();
    },

    toggleAngle() {
        this.angleMode = this.angleMode === 'DEG' ? 'RAD' : 'DEG';
        this.updateUI();
    },

    factorial(n) {
        if (n < 0 || n > 170) return 'Error';
        if (n === 0) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    },

    formatResult(val) {
        if (typeof val !== 'number' || !Number.isFinite(val)) return 'Error';
        if (Math.abs(val) > 1e10) return val.toExponential(4);
        return Number.isInteger(val) ? val.toString() : Number(val.toFixed(6)).toString();
    },

    solve() {
        try {
            if (this.currentTab === 'sci') {
                let expr = this.displayValue;

                // 1. Check parentheses balance
                const openCount = (expr.match(/\(/g) || []).length;
                const closeCount = (expr.match(/\)/g) || []).length;
                if (openCount !== closeCount) {
                    this.displayValue = 'Error';
                    this.updateUI();
                    return;
                }

                // 2. Replace roots and powers first
                expr = expr
                    .replace(/root\(([^,]+),([^)]+)\)/g, 'Math.pow($2, 1/$1)')
                    .replace(/square\(([^)]+)\)/g, 'Math.pow($1,2)')
                    .replace(/cube\(([^)]+)\)/g, 'Math.pow($1,3)');

                // 3. Trigonometry
                if (this.angleMode === 'DEG') {
                    expr = expr
                        .replace(/sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
                        .replace(/cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
                        .replace(/tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');
                } else {
                    expr = expr
                        .replace(/sin\(/g, 'Math.sin(')
                        .replace(/cos\(/g, 'Math.cos(')
                        .replace(/tan\(/g, 'Math.tan(');
                }

                // 4. Other math functions and constants
                expr = expr
                    .replace(/log\(([^)]+)\)/g, 'Math.log10($1)')
                    .replace(/ln\(([^)]+)\)/g, 'Math.log($1)')
                    .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
                    .replace(/cbrt\(([^)]+)\)/g, 'Math.cbrt($1)')
                    .replace(/π/g, 'Math.PI')
                    .replace(/\be\b/g, 'Math.E')
                    .replace(/Ans/g, this.lastAnswer)
                    .replace(/\^/g, '**')
                    .replace(/mod/g, '%');

                // 5. Factorials
                expr = expr.replace(/(\d+|\([^()]+\))!/g, (match) => {
                    const num = Function('"use strict";return ' + match.slice(0,-1))();
                    return this.factorial(Number(num));
                });

                // 6. Evaluate
                const result = new Function(`"use strict";return (${expr})`)();
                const formatted = this.formatResult(result);
                this.lastAnswer = result;

                // 7. Update history
                this.history.unshift(`${this.displayValue} = ${formatted}`);
                if (this.history.length > 10) this.history.pop();
                this.displayValue = formatted;
            } else {
                // Binary mode
                let expr = this.displayValue.replace(/[01]+/g, bin => parseInt(bin,2));
                const result = new Function(`"use strict";return (${expr})`)();
                const formatted = Math.floor(result).toString(2);
                this.displayValue = formatted;
            }
        } catch (err) {
            console.error("Calculation Error:", err);
            this.displayValue = 'Error';
        }
        this.updateUI();
    },

    handleInput(val) {
        if (val === 'C') {
            this.displayValue = '';
        } else if (val === '⌫') {
            this.displayValue = ['Error','Infinity','NaN'].includes(this.displayValue) ? '' : this.displayValue.slice(0,-1);
        } else if (val === '=') {
            this.solve();
        } else if (val === 'MC') {
            this.memory = 0;
        } else if (val === 'MR') {
            this.displayValue += this.memory;
        } else if (val === 'M+') {
            this.memory += Number(this.displayValue || 0);
        } else if (val === 'M-') {
            this.memory -= Number(this.displayValue || 0);
        } else {
            const operators = ['+','-','*','/','^','mod'];
            const lastChar = this.displayValue.slice(-1);

            if (operators.includes(val) && operators.includes(lastChar)) {
                this.displayValue = this.displayValue.slice(0,-1) + val;
            } else {
                if (this.currentTab === 'bin') {
                    const allowed = ['0','1','+','-','*','/'];
                    if (!allowed.includes(val)) return;
                }
                // Allow parentheses
                if (val === '(' || val === ')') {
                    this.displayValue += val;
                } else {
                    this.displayValue += val;
                }
            }
        }
        this.updateUI();
    },

    attachKeyboard() {
        if (this.isKeyboardAttached) return;
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;
            const key = e.key;
            if (!isNaN(key) || ['+','-','*','/','.','^','(',')'].includes(key)) {
                this.handleInput(key);
            } else if (key === 'Enter') {
                e.preventDefault();
                this.solve();
            } else if (key === 'Backspace') {
                this.handleInput('⌫');
            } else if (key === 'Escape') {
                this.toggle();
            }
        });
        this.isKeyboardAttached = true;
    },

    updateUI() {
        const displayEl = document.getElementById('calc-display');
        const containerEl = document.getElementById('calc-container');
        const historyEl = document.getElementById('calc-history');

        if (displayEl) {
            const latex = this.toLaTeX(this.displayValue || '0');
            displayEl.innerHTML = `$${latex}$`;
            if (window.renderMathInElement) {
                renderMathInElement(displayEl, {
                    delimiters: [{left:'$', right:'$', display:false}],
                    throwOnError:false
                });
            }
        }
        if (containerEl) containerEl.innerHTML = this.renderContent();
        if (historyEl) {
            historyEl.innerHTML = this.history.map(h => `<div class="text-[10px] text-gray-400">${h}</div>`).join('');
        }
    },

    renderContent() {
        const sciKeys = [
            'MC','MR','M+','M-',
            'sin(','cos(','tan(','log(','ln(','sqrt(','cbrt(','^','mod',
            '7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','π','+',
            'C','⌫','=','(',')'
        ];
        const binKeys = ['1','0','+','-','*','/','C','⌫','='];
        const keys = this.currentTab === 'sci' ? sciKeys : binKeys;

        return `
            <div class="flex border-b border-gray-700 bg-slate-900">
                <button onclick="window.setCalcTab('sci')" class="flex-1 p-2 text-[10px] font-bold ${this.currentTab==='sci'?'text-[#d4af37] border-b-2 border-[#d4af37]':'text-gray-500'}">SCIENTIFIC</button>
                <button onclick="window.setCalcTab('bin')" class="flex-1 p-2 text-[10px] font-bold ${this.currentTab==='bin'?'text-[#d4af37] border-b-2 border-[#d4af37]':'text-gray-500'}">BINARY</button>
            </div>
            <div class="p-2 text-right text-[10px] text-gray-400">
                MODE: ${this.angleMode} <button onclick="window.toggleAngle()" class="ml-2 text-[#d4af37]">SWITCH</button>
            </div>
            <div class="grid ${this.currentTab==='sci'?'grid-cols-4':'grid-cols-3'} gap-1.5 p-2">
                ${keys.map(btn => `
                    <button onclick="window.calcInput('${btn}')" class="p-2.5 bg-slate-700 text-white hover:bg-slate-600 text-[11px] font-bold rounded ${['C','⌫'].includes(btn)?'bg-red-900/40 text-red-400':''} ${btn==='='?`bg-[#d4af37] text-[#064e3b] ${this.currentTab==='sci'?'col-span-2':'col-span-3'}`:''}">
                        ${btn}
                    </button>
                `).join('')}
            </div>`;
    },

    render() {
        return `
        <div id="calc-overlay" class="hidden fixed inset-x-4 top-10 mx-auto sm:right-10 sm:left-auto w-auto max-w-xs sm:w-80 bg-slate-800 rounded-2xl shadow-2xl z-50 border border-gray-600 flex flex-col max-h-[85dvh]">
            <div class="bg-[#064e3b] p-3 flex justify-between items-center border-b border-[#d4af37]/30 shrink-0">
                <span class="text-[#d4af37] text-[12px] font-bold tracking-widest uppercase">Titan Scientific</span>
                <button onclick="window.toggleCalc()" class="text-gray-400 hover:text-white">✕</button>
            </div>
            <div class="p-4 bg-slate-900/50 shrink-0">
                <div id="calc-display" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-right text-2xl text-[#d4af37] font-mono min-h-[60px] flex items-center justify-end overflow-hidden">$0$</div>
            </div>
            <div id="calc-history" class="px-4 max-h-12 overflow-y-auto text-right"></div>
            <div id="calc-container" class="overflow-y-auto flex-1">${this.renderContent()}</div>
        </div>`;
    }
};

// Bindings
window.toggleCalc = () => Calculator.toggle();
window.calcInput = val => Calculator.handleInput(val);
window.setCalcTab = tab => Calculator.setTab(tab);
window.toggleAngle = () => Calculator.toggleAngle();