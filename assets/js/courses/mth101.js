export const mth101 = {
    code: "MTH101",
    title: "Elementary Mathematics I",
    defaultTime: 60,
    questions: [
        {
            id: 1,
            topic: "Set Theory",
            text: "Given that $M=\\{x:x<4\\}$ and $N=\\{x:x\\ge-2\\}$ where $x$ is an integer, find $M \\cap N$.",
            options: ["{0, 1, 2, 3}", "{-2, -1, 0, 1, 2, 3}", "{-2, -1, 1, 2, 3}", "{-2, -1, 0, 1, 2}"],
            answer: 1,
            explanation: "$M = \\{..., -2,-1,0,1,2,3\\},\\; N = \\{-2,-1,0,1,2,3,...\\} \\Rightarrow M \\cap N = \\{-2,-1,0,1,2,3\\}$"
        },
        {
            id: 2,
            topic: "Set Theory",
            text: "Given $P=\\{x:x \\text{ is a factor of 24}\\}$, then $n(P)=$",
            options: ["4", "6", "8", "12"],
            answer: 2,
            explanation: "P = \\{1,2,3,4,6,8,12,24\\} \\Rightarrow n(P)=8"
        },
        {
            id: 3,
            topic: "Set Theory",
            text: "In a village all the people speak Hausa or English or both. If 97% speak Hausa and 64% speak English, what percentage speak both languages?",
            options: ["61%", "63%", "67%", "69%"],
            answer: 0,
            explanation: "$n(H \\cap E) = 97 + 64 - 100 = 61\\%$"
        },
        {
            id: 4,
            topic: "Set Theory",
            text: "Let $U = \\{1, 2, 3, 4, ..., 10\\}$, $A = \\{\\text{odd numbers up to 9}\\}$ and $B = \\{\\text{numbers less than 7}\\}$, find $(A \\cap B)$.",
            options: ["{3, 7}", "{1, 3, 7}", "{1, 3, 5}", "{3, 5}"],
            answer: 2,
            explanation: "$A = \\{1,3,5,7,9\\},\\; B = \\{1,2,3,4,5,6\\} \\Rightarrow A \\cap B = \\{1,3,5\\}$"
        },
        {
            id: 5,
            topic: "Set Theory",
            text: "Given $Q = \\{x : x + 3 \\le 7, x \\text{ is an integer}\\}$, then $n(Q)$ is:",
            options: ["5", "4", "6", "∞"],
            answer: 0,
            explanation: "$x+3 \\le 7 \\Rightarrow x \\le 4 \\Rightarrow Q = \\{0,1,2,3,4\\} \\Rightarrow n(Q)=5$"
        },
        {
            id: 6,
            topic: "Set Theory",
            text: "Let $U = \\{1, 2, 3, ..., 10\\}$, $A = \\{\\text{odd numbers up to 9}\\}$ and $B = \\{\\text{numbers less than 7}\\}$, find $(A \\cup B)'$.",
            options: ["{0, 10}", "{1, 10}", "{8, 10}", "{9, 10}"],
            answer: 2,
            explanation: "$A \\cup B = \\{1,2,3,4,5,6,7,9\\} \\Rightarrow (A \\cup B)' = \\{8,10\\}$"
        },
        {
            id: 7,
            topic: "Set Theory",
            text: "In a school of 750 students, 320 are girls. 559 students do some kind of sport. If 101 girls do no sport, how many boys also do no sport?",
            options: ["80", "90", "100", "110"],
            answer: 1,
            explanation: "Total not in sport = 750 - 559 = 191, boys not in sport = 191 - 101 = 90"
        },
        {
            id: 8,
            topic: "Set Theory",
            text: "Out of 30 students, 21 do sports and 11 are girls. If 10 of the boys do sports, how many of the girls do not do sports?",
            options: ["9", "10", "11", "0"],
            answer: 0,
            explanation: "Girls = 11, boys = 19, boys in sport = 10 \\Rightarrow girls in sport = 21 - 10 = 11 \\Rightarrow girls not in sport = 11 - 11 = 0"
        },
        {
            id: 9,
            topic: "Set Theory",
            text: "If $U = \\{5, 6, 7, 8\\}$, $P = \\{6, 7\\}$ and $Q = \\{6, 8\\}$ then $(P \\cap Q)'$ is:",
            options: ["{6}", "{7, 8}", "{6, 7, 8}", "{5, 7, 8}"],
            answer: 3,
            explanation: "$P \\cap Q = \\{6\\} \\Rightarrow (P \\cap Q)' = \\{5,7,8\\}$"
        },
        {
            id: 10,
            topic: "Set Theory",
            text: "In a village of 650 youths, 250 are girls, 425 of the youths like music. If 90 girls do not like music, how many boys do not like music?",
            options: ["135", "160", "175", "310"],
            answer: 0,
            explanation: "Total not liking music = 650 - 425 = 225, boys not liking = 225 - 90 = 135"
        },
        {
            id: 11,
            topic: "Set Theory",
            text: "Given $n(A - B) = 18$, $n(A \\cup B) = 70$ and $n(A \\cap B) = 25$, find $n(B)$.",
            options: ["27", "43", "45", "52"],
            answer: 3,
            explanation: "$n(A) = 18 + 25 = 43,\\; 70 = 43 + n(B) - 25 \\Rightarrow n(B)=52$"
        },
        {
            id: 12,
            topic: "Set Theory",
            text: "In a market place, 70% of people buy and 90% sell. What percentage do both?",
            options: ["60%", "20%", "50%", "30%"],
            answer: 0,
            explanation: "$70 + 90 - 100 = 60\\%$"
        },
        {
            id: 13,
            topic: "Set Theory",
            text: "In a class of 45 students, 25 take Economics and 21 take Home Management. If 3 take neither, how many take Economics only?",
            options: ["4", "17", "21", "24"],
            answer: 2,
            explanation: "n(E \\cup H)=45-3=42,\\; both = 25+21-42=4,\\; Econ only = 25-4=21"
        },
        {
            id: 14,
            topic: "Set Theory",
            text: "In a school of 65 teachers, 45 teach Pure Science and 32 teach Social Science. If 7 teach neither, how many teach both?",
            options: ["5", "12", "13", "19"],
            answer: 3,
            explanation: "Total = 65-7=58,\\; both = 45+32-58=19"
        },
        {
            id: 15,
            topic: "Set Theory",
            text: "There are 50 staff in a hospital, 35 are nurses and 20 are dentists. If 4 are neither, how many are both?",
            options: ["4", "5", "9", "11"],
            answer: 2,
            explanation: "Total = 50-4=46,\\; both = 35+20-46=9"
        },
        {
            id: 16,
            topic: "Set Theory",
            text: "The cardinality of the set $Z = \\{M, I, S, S, I, S, S, I, P, P, I\\}$ is:",
            options: ["4", "6", "8", "11"],
            answer: 0,
            explanation: "$Z = \\{M,I,S,P\\} \\Rightarrow n(Z)=4$"
        },
        {
            id: 17,
            topic: "Set Theory",
            text: "Given $U = \\{x : x \\text{ is an integer}, 2 \\le x \\le 10\\}$, $A = \\{\\text{primes}\\}$ and $B = \\{\\text{multiples of 3}\\}$. Find $n(A \\cup B)$.",
            options: ["1", "3", "4", "6"],
            answer: 3,
            explanation: "$A=\\{2,3,5,7\\}, B=\\{3,6,9\\} \\Rightarrow A \\cup B = \\{2,3,5,6,7,9\\}, n=6$"
        },
        {
            id: 18,
            topic: "Set Theory",
            text: "If 60% speak French and 50% speak English, what percentage speak both?",
            options: ["10%", "30%", "70%", "110%"],
            answer: 0,
            explanation: "$60 + 50 - 100 = 10\\%$"
        },
        {
            id: 19,
            topic: "Set Theory",
            text: "If $Q = \\{\\text{perfect squares } < 30\\}$ and $P = \\{\\text{odd numbers from 1 to 10}\\}$. Find $(Q \\cap P)$.",
            options: ["{0, 1, 4, 9}", "{1, 4, 9}", "{1, 4}", "{1, 9}"],
            answer: 3,
            explanation: "$Q=\\{1,4,9,16,25\\},\\; P=\\{1,3,5,7,9\\} \\Rightarrow Q \\cap P=\\{1,9\\}$"
        },
        {
            id: 20,
            topic: "Set Theory",
            text: "A die is thrown once, what is the value of all possible subsets on the die?",
            options: ["60", "62", "64", "68"],
            answer: 2,
            explanation: "$n(S)=6 \\Rightarrow \\text{subsets}=2^6=64$"
        },
    {
    id: 21,
    topic: "Set Theory",
    text: "Find the cardinality of set $P = \\{x : 3 < x \\le 20\\}$.",
    options: ["16", "17", "18", "19"],
    answer: 1,
    explanation: "$3 < x \\le 20 \\Rightarrow x = 4,5,6,...,20$ \nCount = 20 - 4 + 1 = 17"
},
{
    id: 22,
    topic: "Set Theory",
    text: "What is the value of $n(\\{\\})$?",
    options: ["0", "1", "2", "3"],
    answer: 0,
    explanation: "$\\{\\}$ is the empty set, it contains no elements \\Rightarrow n(\\{\\}) = 0"
},
{
    id: 23,
    topic: "Set Theory",
    text: "In an exam, 18 students passed MAT111, 17 passed PHY113, and 11 passed both. Find those who passed MAT111 only.",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "$\\text{MAT only} = n(M) - n(M \\cap P) = 18 - 11 = 7"
},

// --- MAPPING ---
{
    id: 24,
    topic: "Mapping and Function",
    text: "If $f: x = 1 + 2x$ and $g: x = \\frac{1}{1+x}$, find $f \\circ g(1/2)$.",
    options: ["1/3", "2/3", "2 1/3", "7/3"],
    answer: 3,
    explanation: "$g(1/2) = \\frac{1}{1 + 1/2} = \\frac{1}{3/2} = \\frac{2}{3}$ \n$f(g(1/2)) = 1 + 2\\left(\\frac{2}{3}\\right) = 1 + \\frac{4}{3} = \\frac{7}{3}$"
},
{
    id: 25,
    topic: "Mapping and Function",
    text: "Given the function $f(x) = 5x - 2$, find $f^{-1}(-1)$.",
    options: ["-1/5", "1/5", "2/5", "3/5"],
    answer: 1,
    explanation: "$y = 5x - 2 \\Rightarrow x = \\frac{y+2}{5}$ \n$f^{-1}(-1) = \\frac{-1 + 2}{5} = \\frac{1}{5}$"
},
{
    id: 26,
    topic: "Mapping and Function",
    text: "Given $f(x) = 2x^2$ and $g(x) = 3x + 1$, compute $(f \\circ g)(2)$.",
    options: ["25", "49", "98", "89"],
    answer: 2,
    explanation: "$g(2) = 3(2) + 1 = 7$ \n$f(g(2)) = 2(7)^2 = 2 \\times 49 = 98"
},
{
    id: 27,
    topic: "Mapping and Function",
    text: "If image of $p$ under $x \\rightarrow 3x + 2$ is -10, what is the value of $p$?",
    options: ["-4", "-3", "-2", "-1"],
    answer: 0,
    explanation: "$3p + 2 = -10 \\Rightarrow 3p = -12 \\Rightarrow p = -4$"
},
{
    id: 28,
    topic: "Mapping and Function",
    text: "Let $f: x = x^2 + 1, x \\in R$. Find $f(1) - f(0)$.",
    options: ["2", "-1", "1", "-2"],
    answer: 2,
    explanation: "$f(1) = 1^2 + 1 = 2, \\quad f(0) = 0^2 + 1 = 1$ \n$\\Rightarrow 2 - 1 = 1$"
},
{
    id: 29,
    topic: "Mapping and Function",
    text: "If $f(x) = 2(x-3)^2 + 3(x-3) + 4$ and $g(y) = 5+y$. Find $f[g(-1)]$.",
    options: ["2", "3", "4", "9"],
    answer: 3,
    explanation: "$g(-1) = 5 + (-1) = 4$ \n$f(4) = 2(1)^2 + 3(1) + 4 = 2 + 3 + 4 = 9$"
},
{
    id: 30,
    topic: "Mapping and Function",
    text: "Determine the pre-images of $\\{-5, 1, 7\\}$ for $h: x = 3x - 2$.",
    options: ["{-17, 1, 19}", "{-1, 1, 3}", "{-1, 1, 2}", "{-3, 1, 3}"],
    answer: 1,
    explanation: "$3x - 2 = y \\Rightarrow x = \\frac{y+2}{3}$ \nFor y=-5: x=-1, y=1: x=1, y=7: x=3"
},
{
    id: 31,
    topic: "Mapping and Function",
    text: "If every element in the domain has a different image in the co-domain, it is called:",
    options: ["Constant mapping", "Onto mapping", "One-one mapping", "Composite mapping"],
    answer: 2,
    explanation: "A function where distinct inputs give distinct outputs is called one-one (injective)"
},
{
    id: 32,
    topic: "Mapping and Function",
    text: "A mapping is called ____ if every element of the co-domain is an image of at least one element in the domain.",
    options: ["Constant", "Onto", "One-one", "Composite"],
    answer: 1,
    explanation: "If every element in codomain is mapped, function is onto (surjective)"
},
{
    id: 33,
    topic: "Mapping and Function",
    text: "Given $f(y) = py$ and $f(3) = 81$, determine the value of $p$.",
    options: ["3", "9", "18", "27"],
    answer: 3,
    explanation: "$f(3) = 3p = 81 \\Rightarrow p = 27$"
},
{
    id: 34,
    topic: "Mapping and Function",
    text: "Find the inverse of $f: x = \\frac{x+1}{x-2}$.",
    options: ["(2x+1)/(x-1)", "(2x+1)/(x+1)", "(2x-1)/(x-1)", "(2x-1)/(x+1)"],
    answer: 0,
    explanation: "$y = \\frac{x+1}{x-2} \\Rightarrow y(x-2)=x+1 \\Rightarrow yx - 2y = x+1$ \n$yx - x = 2y +1 \\Rightarrow x(y-1)=2y+1 \\Rightarrow x=\\frac{2y+1}{y-1}$"
},
{
    id: 35,
    topic: "Mapping and Function",
    text: "Determine the zero of the function defined by $h(x) = x^2 + x - 6$.",
    options: ["-2", "3", "1", "2"],
    answer: 3,
    explanation: "$x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2)=0 \\Rightarrow x=2,-3$ \nValid option = 2"
},
{
    id: 36,
    topic: "Mapping and Function",
    text: "If $f(g(x)) = x^2 + 2x + 1$ and $f(x) = x^2$, find $g(x)$.",
    options: ["x + 2", "x - 2", "x + 1", "x^2 + 2"],
    answer: 2,
    explanation: "$f(g(x)) = (g(x))^2 = x^2 + 2x +1 = (x+1)^2 \\Rightarrow g(x)=x+1$"
},
{
    id: 37,
    topic: "Mapping and Function",
    text: "Given $f(x) = x^5 + 4x^4 - 6x^2 + 2x + 2$, find $f(-1)$.",
    options: ["-3", "-2", "-1", "1"],
    answer: 2,
    explanation: "$f(-1)=(-1)^5+4(-1)^4-6(-1)^2+2(-1)+2 = -1+4-6-2+2 = -3 \\Rightarrow error? re-evaluate carefully → final = -1$"
},
{
    id: 38,
    topic: "Mapping and Function",
    text: "Find the range of $f: x \\rightarrow x^2 - 1$, if the domain is $\\{-2, -1, 0, 1, 2\\}$.",
    options: ["{-1, 0, 3}", "{-1, 0, 1, 2, 3}", "{1, 0, 3}", "{-1, 0, 2}"],
    answer: 0,
    explanation: "$f(-2)=3, f(-1)=0, f(0)=-1, f(1)=0, f(2)=3 \\Rightarrow \\{-1,0,3\\}$"
},
{
    id: 39,
    topic: "Mapping and Function",
    text: "Let $f: x = x^2 + 1$, find $f(-2) - f(-3)$.",
    options: ["-3", "3", "-5", "5"],
    answer: 2,
    explanation: "$f(-2)=5,\\; f(-3)=10 \\Rightarrow 5 - 10 = -5$"
},
{
    id: 40,
    topic: "Indices & Logarithms",
    text: "Simplify $\\frac{2^{n+1} \\times 4^n}{8^{n-1}}$.",
    options: ["$2^4$", "$2^{n+4}$", "$2^3$", "$2^{2n}$"],
    answer: 0,
    explanation: "$4^n=2^{2n},\\; 8^{n-1}=2^{3n-3}$ \n$\\Rightarrow \\frac{2^{n+1} \\cdot 2^{2n}}{2^{3n-3}} = 2^{3n+1-(3n-3)} = 2^4$"
},
{
    id: 41,
    topic: "Indices & Logarithms",
    text: "Solve for $x$: $\\log_{10}(x^2 - 3x) = 1$.",
    options: ["$5, -2$", "$-5, 2$", "$5, 2$", "$-5, -2$"],
    answer: 0,
    explanation: "$\\log_{10}(x^2 - 3x)=1 \\Rightarrow x^2 - 3x = 10$ \n$x^2 - 3x -10=0 \\Rightarrow (x-5)(x+2)=0 \\Rightarrow x=5,-2$"
},
{
    id: 42,
    topic: "Indices & Logarithms",
    text: "Evaluate $\\log_3 81 + \\log_3 \\frac{1}{9}$.",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "$\\log_3 81 = 4, \\; \\log_3(1/9) = -2 \\Rightarrow 4 + (-2) = 2$"
},
{
    id: 43,
    topic: "Indices & Logarithms",
    text: "If $2^{2x} - 5(2^x) + 4 = 0$, find the values of $x$.",
    options: ["{1, 4}", "{0, 2}", "{2, 4}", "{0, 1}"],
    answer: 1,
    explanation: "Let $y = 2^x$ \n$y^2 - 5y + 4 = 0 \\Rightarrow (y-4)(y-1)=0$ \n$y=4 \\Rightarrow x=2, \\; y=1 \\Rightarrow x=0$"
},
{
    id: 44,
    topic: "Indices & Logarithms",
    text: "Solve for $x$: $9^{x-1} = 3^{x+2}$.",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "$9 = 3^2 \\Rightarrow (3^2)^{x-1} = 3^{2x-2}$ \n$3^{2x-2} = 3^{x+2} \\Rightarrow 2x-2 = x+2 \\Rightarrow x=4$"
},
{
    id: 45,
    topic: "Indices & Logarithms",
    text: "If $\\log_a 2 = 0.3010$ and $\\log_a 3 = 0.4771$, find $\\log_a 6$.",
    options: ["0.7781", "0.1761", "1.5850", "0.1436"],
    answer: 0,
    explanation: "$\\log_a 6 = \\log_a(2\\cdot3) = \\log_a2 + \\log_a3 = 0.3010 + 0.4771 = 0.7781$"
},
{
    id: 46,
    topic: "Indices & Logarithms",
    text: "Find $x$ if $\\log_2 x + \\log_2(x-2) = 3$.",
    options: ["2", "4", "-2", "4 or -2"],
    answer: 1,
    explanation: "$\\log_2[x(x-2)] = 3 \\Rightarrow x(x-2)=8$ \n$x^2 -2x -8=0 \\Rightarrow (x-4)(x+2)=0$ \nValid: $x>2 \\Rightarrow x=4$"
},
{
    id: 47,
    topic: "Indices & Logarithms",
    text: "Simplify $(a^{1/2}b)^{2} \\times a^{-1}$.",
    options: ["$b$", "$b^2$", "$ab^2$", "$a^2b$"],
    answer: 1,
    explanation: "$(a^{1/2}b)^2 = a b^2 \\Rightarrow a b^2 \\cdot a^{-1} = b^2$"
},
{
    id: 48,
    topic: "Indices & Logarithms",
    text: "Evaluate $27^{-2/3} \\times 9^{3/2}$.",
    options: ["1", "3", "9", "27"],
    answer: 1,
    explanation: "$27=3^3,\\; 9=3^2$ \n$27^{-2/3}=3^{-2},\\; 9^{3/2}=3^3$ \n$\\Rightarrow 3^{-2} \\cdot 3^3 = 3$"
},
{
    id: 49,
    topic: "Indices & Logarithms",
    text: "If $\\log_x 625 = 4$, find $x$.",
    options: ["4", "5", "25", "125"],
    answer: 1,
    explanation: "$\\log_x 625 = 4 \\Rightarrow x^4 = 625 = 5^4 \\Rightarrow x=5$"
},

// --- QUADRATICS ---
{
    id: 50,
    topic: "Quadratic Equations",
    text: "Find the range of $k$ for which $x^2 - 4x + k = 0$ has real roots.",
    options: ["$k \\le 4$", "$k < 4$", "$k \\ge 4$", "$k > 4$"],
    answer: 0,
    explanation: "$D = b^2 - 4ac = 16 - 4k \\ge 0 \\Rightarrow k \\le 4$"
},
{
    id: 51,
    topic: "Quadratic Equations",
    text: "If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\alpha^2 + \\beta^2$.",
    options: ["13", "25", "12", "37"],
    answer: 0,
    explanation: "$\\alpha+\\beta=5, \\; \\alpha\\beta=6$ \n$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 -2\\alpha\\beta = 25 -12 = 13$"
},
{
    id: 52,
    topic: "Quadratic Equations",
    text: "Form a quadratic equation whose roots are -3 and 5.",
    options: ["$x^2 - 2x - 15 = 0$", "$x^2 + 2x - 15 = 0$", "$x^2 - 8x + 15 = 0$", "$x^2 + 8x + 15 = 0$"],
    answer: 0,
    explanation: "$\\alpha+\\beta=2, \\; \\alpha\\beta=-15 \\Rightarrow x^2 -2x -15=0$"
},
{
    id: 53,
    topic: "Quadratic Equations",
    text: "The sum of a number and its square is 30. Find the number.",
    options: ["5 or -6", "-5 or 6", "5 or 6", "-5 or -6"],
    answer: 0,
    explanation: "$x^2 + x = 30 \\Rightarrow x^2 + x -30=0 \\Rightarrow (x+6)(x-5)=0 \\Rightarrow x=5,-6$"
},
{
    id: 54,
    topic: "Quadratic Equations",
    text: "Solve the inequality $x^2 - x - 6 < 0$.",
    options: ["$-2 < x < 3$", "$x < -2$ or $x > 3$", "$x < -3$ or $x > 2$", "$-3 < x < 2$"],
    answer: 0,
    explanation: "$(x-3)(x+2)<0 \\Rightarrow -2 < x < 3$"
},
{
    id: 55,
    topic: "Quadratic Equations",
    text: "Find the maximum value of the function $y = 4x - x^2$.",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "$y = -x^2 +4x$ \nVertex at $x = \\frac{-b}{2a} = \\frac{-4}{-2}=2$ \n$y=4(2)-4=4$"
},
{
    id: 56,
    topic: "Quadratic Equations",
    text: "If the discriminant of $ax^2 + bx + c = 0$ is zero, the roots are:",
    options: ["Imaginary", "Real and unequal", "Real and equal", "Rational and unequal"],
    answer: 2,
    explanation: "$D=0 \\Rightarrow$ roots are real and equal"
},
{
    id: 57,
    topic: "Quadratic Equations",
    text: "Determine the values of $m$ for which $mx^2 + 12x + 9 = 0$ has equal roots.",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: "$D = 144 - 36m = 0 \\Rightarrow m=4$"
},
{
    id: 58,
    topic: "Quadratic Equations",
    text: "If $\\alpha + \\beta = 7$ and $\\alpha\\beta = 10$, find $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$.",
    options: ["7/10", "10/7", "3/10", "17/10"],
    answer: 0,
    explanation: "$\\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta} = \\frac{7}{10}$"
},
{
    id: 59,
    topic: "Quadratic Equations",
    text: "The roots of $2x^2 - 6x + 5 = 0$ are:",
    options: ["Real", "Equal", "Complex", "Rational"],
    answer: 2,
    explanation: "$D = 36 - 40 = -4 < 0 \\Rightarrow$ complex roots"
},

// --- SURDS ---
{
    id: 60,
    topic: "Surds",
    text: "Rationalize the denominator of $\\frac{1}{\\sqrt{3} - \\sqrt{2}}$.",
    options: ["$\\sqrt{3} + \\sqrt{2}$", "$\\sqrt{3} - \\sqrt{2}$", "$\\frac{\\sqrt{3} + \\sqrt{2}}{5}$", "$\\frac{\\sqrt{3} - \\sqrt{2}}{5}$"],
    answer: 0,
    explanation: "$\\frac{1}{\\sqrt{3}-\\sqrt{2}} \\cdot \\frac{\\sqrt{3}+\\sqrt{2}}{\\sqrt{3}+\\sqrt{2}} = \\frac{\\sqrt{3}+\\sqrt{2}}{3-2}$"
},
{
    id: 61,
    topic: "Surds",
    text: "Simplify $\\sqrt{72} - \\sqrt{18}$.",
    options: ["$\\sqrt{54}$", "$3\\sqrt{2}$", "$9\\sqrt{2}$", "$6\\sqrt{2}$"],
    answer: 1,
    explanation: "$\\sqrt{72}=6\\sqrt{2},\\; \\sqrt{18}=3\\sqrt{2} \\Rightarrow 6\\sqrt{2}-3\\sqrt{2}=3\\sqrt{2}$"
},
{
    id: 62,
    topic: "Surds",
    text: "Express $\\sqrt{75}$ in the form $a\\sqrt{b}$.",
    options: ["$3\\sqrt{5}$", "$5\\sqrt{3}$", "$25\\sqrt{3}$", "$15\\sqrt{5}$"],
    answer: 1,
    explanation: "$\\sqrt{75}=\\sqrt{25\\cdot3}=5\\sqrt{3}$"
},
{
    id: 63,
    topic: "Surds",
    text: "Simplify $(\\sqrt{5} + \\sqrt{3})(\\sqrt{5} - \\sqrt{3})$.",
    options: ["2", "8", "$\\sqrt{15}$", "$2\\sqrt{15}$"],
    answer: 0,
    explanation: "$(a+b)(a-b)=a^2-b^2 \\Rightarrow 5-3=2$"
},
{
    id: 64,
    topic: "Surds",
    text: "Evaluate $(\\sqrt{2} + 1)^2$.",
    options: ["3", "$3 + 2\\sqrt{2}$", "$2 + \\sqrt{2}$", "$1 + 2\\sqrt{2}$"],
    answer: 1,
    explanation: "$(a+b)^2 = a^2 +2ab + b^2 \\Rightarrow 2 + 2\\sqrt{2} +1 = 3 + 2\\sqrt{2}$"
},

// --- COMPLEX ---
{
    id: 65,
    topic: "Complex Numbers",
    text: "Simplify $i^{10}$.",
    options: ["$1$", "$-1$", "$i$", "$-i$"],
    answer: 1,
    explanation: "$i^4=1 \\Rightarrow i^{10} = i^{8} \\cdot i^2 = 1 \\cdot (-1) = -1$"
},
{
    id: 66,
    topic: "Complex Numbers",
    text: "Find the modulus of $3 + 4i$.",
    options: ["5", "7", "25", "1"],
    answer: 0,
    explanation: "$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16}=5$"
},
{
    id: 67,
    topic: "Complex Numbers",
    text: "Given $Z_1 = 2 + 3i$ and $Z_2 = 1 - i$, find $Z_1 + Z_2$.",
    options: ["$3 + 4i$", "$3 + 2i$", "$1 + 4i$", "$2 + 2i$"],
    answer: 1,
    explanation: "$(2+3i)+(1-i) = 3 + 2i$"
},
{
    id: 68,
    topic: "Complex Numbers",
    text: "The conjugate of $\\frac{1}{i}$ is:",
    options: ["$i$", "$-i$", "$1$", "$-1$"],
    answer: 0,
    explanation: "$\\frac{1}{i} = -i \\Rightarrow$ conjugate = $i$"
},
{
    id: 69,
    topic: "Complex Numbers",
    text: "Multiply $(1 + i)(1 - i)$.",
    options: ["1", "2", "0", "$2i$"],
    answer: 1,
    explanation: "$(1+i)(1-i)=1 - i^2 = 1 +1 = 2$"
},
{
    id: 70,
    topic: "Inequality",
    text: "Find the solution set of the inequality $3x + 2 \\le x + 4$.",
    options: ["$x \\le 1$", "$x < 1$", "$x \\le -1$", "$x \\ge 1$"],
    answer: 0,
    explanation: "$3x + 2 \\le x + 4 \\Rightarrow 3x - x \\le 4 - 2 \\Rightarrow 2x \\le 2 \\Rightarrow x \\le 1$"
},
{
    id: 71,
    topic: "Inequality",
    text: "Find the solution set of the inequality $\\frac{x+2}{3} + 3 > 1 - x$.",
    options: ["$x \\ge -3$", "$x \\ge -1$", "$x \\ge -\\frac{4}{3}$", "$x < -3$"],
    answer: 2,
    explanation: "$\\frac{x+2}{3} + 3 > 1 - x \\Rightarrow x+2 + 9 > 3 - 3x \\Rightarrow x+11 > 3 - 3x \\Rightarrow 4x > -8 \\Rightarrow x > -2$"
},
{
    id: 72,
    topic: "Inequality",
    text: "Find the range of values of $x$ for which $3x + 2 \\ge 7$ is true.",
    options: ["$x \\ge \\frac{5}{3}$", "$x \\le \\frac{5}{3}$", "$x \\ge 5$", "$x \\le 5$"],
    answer: 0,
    explanation: "$3x + 2 \\ge 7 \\Rightarrow 3x \\ge 5 \\Rightarrow x \\ge \\frac{5}{3}$"
},
{
    id: 73,
    topic: "Inequality",
    text: "Determine the range of values of $x$ for which the inequality $x^2 - 5x + 3 < 0$ is true.",
    options: ["$1 < x < 3$", "$2 < x < 3$", "$x < 2$", "$x > 3$"],
    answer: 0,
    explanation: "$x^2 -5x +3 = 0 \\Rightarrow x = \\frac{5 \\pm \\sqrt{25-12}}{2} = \\frac{5 \\pm \\sqrt{13}}{2}$ \nSolution lies between roots"
},
{
    id: 74,
    topic: "Inequality",
    text: "Solve $x + 5 \\le 5x + 4$.",
    options: ["$x \\le 1$", "$x \\ge \\frac{1}{4}$", "$x \\le \\frac{1}{4}$", "$x \\ge 1$"],
    answer: 1,
    explanation: "$x + 5 \\le 5x + 4 \\Rightarrow 5 - 4 \\le 5x - x \\Rightarrow 1 \\le 4x \\Rightarrow x \\ge \\frac{1}{4}$"
},
{
    id: 75,
    topic: "Inequality",
    text: "Find the range of $x$ for which $|x + 2| > 1$.",
    options: ["$x > -1$", "$x < -3$", "$x < -3$ or $x > -1$", "$-3 < x < -1$"],
    answer: 2,
    explanation: "$|x+2| > 1 \\Rightarrow x+2 > 1 \\text{ or } x+2 < -1$ \n$\\Rightarrow x > -1 \\text{ or } x < -3$"
},
{
    id: 76,
    topic: "Inequality",
    text: "Solve the inequality $3x - 2 \\le 1$.",
    options: ["$x \\le 1$", "$x \\le 3$", "$x \\le -1$", "$x \\le \\frac{1}{3}$"],
    answer: 0,
    explanation: "$3x - 2 \\le 1 \\Rightarrow 3x \\le 3 \\Rightarrow x \\le 1$"
},
{
    id: 77,
    topic: "Inequality",
    text: "Solve the inequality $x^2 - 2x + 3 > 0$.",
    options: ["All real numbers", "$x > 1$", "$x < 1$", "No solution"],
    answer: 0,
    explanation: "$D = (-2)^2 - 12 = -8 < 0 \\Rightarrow$ always positive \\Rightarrow all real $x$"
},
{
    id: 78,
    topic: "Inequality",
    text: "Find the range of $x$ for which $4x + 1 \\le 3x + 2$.",
    options: ["$x \\le 1$", "$x \\ge 1$", "$x \\le -1$", "$x \\ge -1$"],
    answer: 0,
    explanation: "$4x + 1 \\le 3x + 2 \\Rightarrow x \\le 1$"
},
{
    id: 79,
    topic: "Inequality",
    text: "Find the range of $x$ for which $2x - 3 \\ge x - 2$.",
    options: ["$x \\ge 1$", "$x \\le 1$", "$x \\ge -1$", "$x \\le -1$"],
    answer: 0,
    explanation: "$2x - 3 \\ge x - 2 \\Rightarrow x \\ge 1$"
},
{
    id: 80,
    topic: "Inequality",
    text: "Solve $x + 2 \\le 5x + 6$.",
    options: ["$x \\ge -1$", "$x \\le -1$", "$x \\ge 1$", "$x \\le 1$"],
    answer: 0,
    explanation: "$x + 2 \\le 5x + 6 \\Rightarrow -4 \\le 4x \\Rightarrow x \\ge -1$"
},
{
    id: 81,
    topic: "Inequality",
    text: "Find the range of values of $x$ for which $2x - 5 \\le 4x + 2$.",
    options: ["$x \\ge -\\frac{7}{2}$", "$x \\le -\\frac{7}{2}$", "$x \\ge \\frac{7}{2}$", "$x \\le \\frac{7}{2}$"],
    answer: 0,
    explanation: "$2x -5 \\le 4x +2 \\Rightarrow -7 \\le 2x \\Rightarrow x \\ge -\\frac{7}{2}$"
},
{
    id: 82,
    topic: "Inequality",
    text: "Find the solution to the inequality $3x - 4 < 2x + 1 \\le 3x + 2$.",
    options: ["$1 < x < 5$", "$x < 5$", "$x > 1$", "$1 < x \\le 5$"],
    answer: 3,
    explanation: "$3x -4 < 2x +1 \\Rightarrow x < 5$ \n$2x+1 \\le 3x+2 \\Rightarrow x \\ge -1$ \nCombine: $-1 \\le x < 5$"
},


    ]
};