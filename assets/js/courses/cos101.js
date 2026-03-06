export const cos101 = {
    defaultTime: 60,
    questions: [
        {
            text: "Computer hardware is best described as:",
            options: [
                "Intangible instructions",
                "Mechanical and electronic parts that can be seen and touched",
                "Programs used for word processing",
                "Data stored in the cloud"
            ],
            answer: 1,
            topic: "Hardware Fundamentals",
            explanation: "Hardware refers to the physical components you can physically touch[cite: 3]."
        },
        {
            text: "The component responsible for executing instructions is the:",
            options: ["Memory", "Input device", "Central Processing Unit (CPU)", "Storage device"],
            answer: 2,
            topic: "CPU Architecture",
            explanation: "The CPU executes the instructions that form a computer program[cite: 4]."
        },
        {
            text: "Which hardware component stores data and programs at least temporarily?",
            options: ["CPU", "Memory", "Output devices", "Plotters"],
            answer: 1,
            topic: "Memory",
            explanation: "Memory is used for temporary storage of data and instructions[cite: 5]."
        },
        {
            text: "Devices used to send data and instructions into the computer are:",
            options: ["Output devices", "Storage devices", "Input devices", "Processing units"],
            answer: 2,
            topic: "Input/Output",
            explanation: "Input devices are the portal through which data enters the system[cite: 6]."
        },
        {
            text: "Which of the following is an example of an output device?",
            options: ["Keyboard", "Mouse", "Printer", "Scanner"],
            answer: 2,
            topic: "Input/Output",
            explanation: "A printer is an output device because it receives information from the computer[cite: 10]."
        },
        {
            text: "Storage devices are used for:",
            options: [
                "Executing logic",
                "Retaining large amounts of information permanently",
                "Temporary data storage",
                "Sending instructions to the CPU"
            ],
            answer: 1,
            topic: "Storage",
            explanation: "Unlike RAM, storage devices retain data even when power is lost[cite: 12]."
        },
        {
            text: "The 'brain' of the computer that contains the ALU and Control Unit is the:",
            options: ["RAM", "CPU", "ROM", "Motherboard"],
            answer: 1,
            topic: "CPU Architecture",
            explanation: "The CPU consists of the Arithmetic Logic Unit and the Control Unit[cite: 14, 15]."
        },
        {
            text: "Which memory is volatile and loses its content when power is turned off?",
            options: ["ROM", "RAM", "Hard Drive", "Flash Drive"],
            answer: 1,
            topic: "Memory",
            explanation: "RAM is volatile memory; it requires power to maintain the stored information[cite: 18, 20]."
        },
        {
            text: "Instructions for starting the computer are usually stored in:",
            options: ["RAM", "ROM", "Cache", "Registers"],
            answer: 1,
            topic: "Memory",
            explanation: "Read-Only Memory (ROM) stores the BIOS/startup instructions[cite: 23]."
        },
        {
            text: "A device that draws pictures using pens for high precision is a:",
            options: ["Laser printer", "Inkjet printer", "Plotter", "Scanner"],
            answer: 2,
            topic: "Input/Output",
            explanation: "Plotters use pens to draw high-precision architectural or engineering designs[cite: 24, 27]."
        },
        {
            text: "Laser printers work in a similar way to:",
            options: ["Typewriters", "Photocopiers", "Dot matrix printers", "Plotters"],
            answer: 1,
            topic: "Hardware Technology",
            explanation: "Laser printers use a photographic process similar to photocopiers[cite: 29, 31]."
        },
        {
            text: "Which sub-unit of the CPU performs addition and subtraction?",
            options: ["Control Unit", "Registers", "Arithmetic Logic Unit (ALU)", "Bus"],
            answer: 2,
            topic: "CPU Architecture",
            explanation: "The ALU handles all mathematical and logical operations[cite: 34, 37]."
        },
        {
            text: "Data refers to information in its:",
            options: ["Organized form", "Raw and unorganized form", "Final output form", "Encrypted form"],
            answer: 1,
            topic: "Data Basics",
            explanation: "Data is the raw, unprocessed facts given to the computer[cite: 39]."
        },
        {
            text: "Which of these is NOT one of the five components of all general-purpose computers?",
            options: ["CPU", "Memory", "Graphics Card", "Storage"],
            answer: 2,
            topic: "Computer Architecture",
            explanation: "While common, a dedicated graphics card is not a core requirement for a general-purpose computer like CPU or Memory[cite: 40, 41]."
        },
        {
            text: "Retrieving information from a computer is the function of:",
            options: ["Input devices", "Output devices", "Storage", "RAM"],
            answer: 1,
            topic: "Input/Output",
            explanation: "Output devices allow the user to retrieve or see the processed data[cite: 43]."
        },

        // MODULE 1: HARDWARE (CONTINUED)
        {
            text: "Which component coordinates the activities of all other hardware units?",
            options: ["ALU", "Control Unit", "Registers", "Power Supply"],
            answer: 1,
            topic: "CPU Architecture",
            explanation: "The Control Unit (CU) acts as the manager of the CPU, directing the flow of data and instructions[cite: 45]."
        },
        {
            text: "A keyboard is a type of:",
            options: ["Processing device", "Output device", "Input device", "Storage device"],
            answer: 2,
            topic: "Input/Output",
           explanation: "Keyboards are primary input devices used to enter text and commands into the computer[cite: 48]."
        },
        {
            text: "What allows the system processing unit to access data as quickly as possible?",
            options: ["Secondary memory", "Primary memory (RAM)", "Magnetic tape", "CD-ROM"],
            answer: 1,
            topic: "Memory",
            explanation: "Primary memory (RAM) provides high-speed access to data currently in use by the CPU[cite: 50]."
        },
        {
            text: "Hardware that is 'built-in' to the CPU to speed up operations is called:",
            options: ["RAM", "Hard Drive", "Registers", "Ports"],
            answer: 2,
            topic: "CPU Architecture",
            explanation: "Registers are small, ultra-fast storage locations internal to the CPU[cite: 51]."
        },
        {
            text: "High-speed memory located between the CPU and main memory is:",
            options: ["RAM", "ROM", "Cache", "Virtual memory"],
            answer: 2,
            topic: "Memory",
            explanation: "Cache memory stores frequently used data to reduce the time the CPU waits for main memory[cite: 52, 53]."
        },
        {
            text: "Which device is typically used by architects and engineers for precision drawing?",
            options: ["Dot matrix printer", "Plotter", "Mouse", "Scanner"],
            answer: 1,
            topic: "Input/Output",
            explanation: "Plotters are specialized output devices used for high-precision technical drawings[cite: 55, 57]."
        },
        {
            text: "The main use of a computer is to process data into:",
            options: ["Hardware", "Information", "Software", "Signals"],
            answer: 1,
            topic: "Data Processing",
            explanation: "Computers take raw data and process it into meaningful information for users[cite: 60]."
        },
        {
            text: "Which component is permanent and cannot be written into by the user?",
            options: ["RAM", "ROM", "Hard disk", "Cache"],
            answer: 1,
            topic: "Memory",
            explanation: "Read-Only Memory (ROM) is non-volatile and generally cannot be modified by standard computer operations[cite: 61, 62]."
        },
        {
            text: "The size of a register in an 8085 microprocessor is typically:",
            options: ["2 bits", "8 or 16 bits", "64 bits", "128 bits"],
            answer: 1,
            topic: "Microprocessors",
            explanation: "Registers in older microprocessors like the 8085 were commonly 8 or 16 bits in size[cite: 63]."
        },
        {
            text: "Which register holds the address of the next instruction to be executed?",
            options: ["Accumulator (AC)", "Data Register (DR)", "Program Counter (PC)", "Instruction Register (IR)"],
            answer: 2,
            topic: "CPU Architecture",
            explanation: "The Program Counter (PC) tracks the memory location of the next instruction in the sequence[cite: 64, 65]."
        },
        {
            text: "The Instruction Register (IR) holds:",
            options: ["Data to be added", "Current instruction code being executed", "Memory address", "Output results"],
            answer: 1,
            topic: "CPU Architecture",
            explanation: "The IR stores the actual instruction currently being decoded or executed[cite: 66]."
        },
        {
            text: "Which register holds memory operands and results of arithmetic operations?",
            options: ["Input Register", "Accumulator (AC)", "Temporary Register", "Program Counter"],
            answer: 1,
            topic: "CPU Architecture",
            explanation: "The Accumulator is a general-purpose register used as a primary workspace for the ALU[cite: 67, 68]."
        },
        {
            text: "Input/Output devices are also collectively known as:",
            options: ["Core hardware", "Peripherals", "Logic units", "Storage"],
            answer: 1,
            topic: "Input/Output",
            explanation: "Peripherals are any external devices that provide input or output for the computer[cite: 69, 71]."
        },
        {
            text: "Which device uses toner to transfer ink to paper?",
            options: ["Inkjet printer", "Laser printer", "Plotter", "Scanner"],
            answer: 1,
            topic: "Input/Output",
            explanation: "Laser printers use dry ink (toner) and static electricity to print[cite: 74, 76]."
        },
        {
            text: "Mechanical parts of the computer are part of:",
            options: ["Software", "Hardware", "Firmware", "Liveware"],
            answer: 1,
            topic: "Hardware Fundamentals",
            explanation: "The physical, mechanical components of the system are categorized as hardware[cite: 79]."
        },
        {
            text: "A 'Byte' is a unit of:",
            options: ["Power", "Data", "Speed", "Voltage"],
            answer: 1,
            topic: "Data Representation",
            explanation: "A byte is a standard unit of measurement for digital data, typically consisting of 8 bits[cite: 81]."
        },
        {
            text: "The CPU interacts directly with which component to fetch instructions?",
            options: ["Storage", "Memory", "Printer", "Scanner"],
            answer: 1,
            topic: "Computer Architecture",
            explanation: "The CPU fetches instructions directly from primary memory (RAM)[cite: 82, 84]."
        },
        {
            text: "Which register holds the memory address?",
            options: ["PC", "AC", "Address Register (AR)", "TR"],
            answer: 2,
            topic: "CPU Architecture",
            explanation: "The Address Register (often called MAR) holds the location in memory being accessed[cite: 87]."
        },
        {
            text: "The term 'Digital' in a computer system usually refers to:",
            options: ["Analog signals", "Discrete states like 0 and 1", "Mechanical gears", "Human fingers"],
            answer: 1,
            topic: "Data Representation",
            explanation: "Digital systems use discrete binary values (0s and 1s) to represent data[cite: 88]."
        },
        {
            text: "A microprocessor contains thousands of tiny switches called:",
            options: ["Resistors", "Transistors", "Capacitors", "Batteries"],
            answer: 1,
            topic: "Hardware Technology",
            explanation: "Transistors are the fundamental switching building blocks of microchips[cite: 90]."
        },
        {
            text: "Primary memory is usually constructed out of:",
            options: ["ROM devices", "RAM devices", "Magnetic disks", "Optical disks"],
            answer: 1,
            topic: "Memory",
            explanation: "Main memory is built using RAM technology for fast read/write access[cite: 91]."
        },
        {
            text: "Data and programs NOT immediately needed are stored in:",
            options: ["Primary memory", "Secondary memory", "CPU registers", "Cache"],
            answer: 1,
            topic: "Storage",
            explanation: "Secondary memory (like hard drives) provides long-term, non-volatile storage[cite: 92]."
        },
        {
            text: "The most common input device for a PC is the:",
            options: ["Printer", "Keyboard", "Monitor", "Plotter"],
            answer: 1,
            topic: "Input/Output",
            explanation: "The keyboard remains the most standard tool for user input[cite: 93, 95]."
        },
        {
            text: "Which of these provides a 'speed-cost compromise' in a computer?",
            options: ["Using only RAM", "Memory Hierarchy", "Eliminating storage", "Using only registers"],
            answer: 1,
            topic: "Computer Architecture",
            explanation: "Memory hierarchy balances expensive high-speed memory with cheaper, slower storage[cite: 98, 99]."
        },

        // MODULE 2: SOFTWARE & OPERATING SYSTEMS
        {
            text: "Software is defined as:",
            options: [
                "Physical parts of a computer",
                "Intangible instructions that tell the computer what to do",
                "Computer cables",
                "Hardware components"
            ],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Software consists of the programs and data that run on the hardware[cite: 101]."
        },
        {
            text: "The two major categories of software are:",
            options: ["System and Application", "Word and Excel", "Windows and Linux", "Input and Output"],
            answer: 0,
            topic: "Software Fundamentals",
            explanation: "Software is broadly divided into System software (OS/Utilities) and Application software[cite: 103, 104]."
        },
        {
            text: "Which software helps the computer carry out basic operating functions?",
            options: ["Application software", "System software", "Spreadsheet", "Game software"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "System software manages the hardware and provides a platform for applications[cite: 108, 110]."
        },
        {
            text: "Application software helps users to:",
            options: ["Boot the computer", "Do 'real work' such as creating documents", "Interact with transistors", "Clean the hardware"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Applications are designed for specific user tasks like word processing or gaming[cite: 113, 115]."
        },
        {
            text: "Operating systems and utilities are types of:",
            options: ["Application software", "System software", "Hardware", "Network protocols"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "The OS is the primary example of system software[cite: 118, 120]."
        },
        {
            text: "The most important software that runs on a computer is the:",
            options: ["Web browser", "Operating System (OS)", "Antivirus", "Word Processor"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "The OS is essential as it manages all hardware and software resources[cite: 129]."
        },
        {
            text: "An OS acts as a 'midway' between the user and:",
            options: ["The Internet", "The Hardware", "Other users", "The monitor only"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "The OS provides an interface for the user to interact with the physical hardware[cite: 130]."
        },
        {
            text: "OS for personal computers are designed to support:",
            options: ["Maximum hardware utilization", "Games and business applications", "Industrial robots", "Scientific calculations only"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "Consumer OS focus on user productivity and entertainment[cite: 137, 139]."
        },
        {
            text: "Virtualization allows several operating systems to:",
            options: ["Run on different computers", "Simultaneously run on a single computer", "Delete each other", "Replace the hardware"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "Virtualization enables one physical machine to act as multiple virtual ones[cite: 142, 144]."
        },
        {
            text: "Early computer systems had:",
            options: ["Advanced OS", "No operating system", "Linux", "Windows"],
            answer: 1,
            topic: "OS History",
            explanation: "The earliest computers were operated manually without an OS layer[cite: 147, 149]."
        },
        {
            text: "In simple batch systems, the software that managed jobs was called the:",
            options: ["Kernel", "Monitor", "Driver", "BIOS"],
            answer: 1,
            topic: "OS History",
            explanation: "A 'resident monitor' was used to automatically transition between jobs[cite: 152, 154]."
        },
        {
            text: "Multiprogramming (multitasking) helps minimize:",
            options: ["RAM usage", "Processor idle time", "Disk space", "User input"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "Multiprogramming keeps the CPU busy by switching between several active tasks[cite: 157, 159]."
        },
        {
            text: "Which system allows multiple users to share processor time?",
            options: ["Serial processing", "Time-sharing systems", "Batch systems", "Single-user systems"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "Time-sharing allocates small slices of CPU time to many users simultaneously[cite: 162, 164]."
        },
        {
            text: "A 'time slice' is a concept used in:",
            options: ["Batch processing", "Time-sharing", "Serial processing", "Storage management"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "A time slice is the brief period a program is allowed to run before switching[cite: 167, 169]."
        },
        {
            text: "Which of the following is an example of an application software?",
            options: ["Windows 10", "Word Processor", "Linux", "Utility"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Word processors are tools for creating documents, a specific user application[cite: 173, 175]."
        },
        {
            text: "Compilers and interpreters are examples of:",
            options: ["Operating systems", "Language translators", "Word processors", "Utilities"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "These tools translate high-level code into machine-readable format[cite: 178, 180]."
        },
        {
            text: "To write a letter to a head of department, you would use:",
            options: ["Spreadsheet", "Word Processor", "Database", "Graphics software"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Word processors are specialized for text-based documentation[cite: 183, 185]."
        },
        {
            text: "To display charts about student admissions, you would use:",
            options: ["Word Processor", "Spreadsheet", "Antivirus", "Operating System"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Spreadsheets like Excel excel at data analysis and chart creation[cite: 188, 190]."
        },
        {
            text: "Which software is used for oral presentations to a class?",
            options: ["Database", "Presentation software", "Compiler", "Utility"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Presentation software (like PowerPoint) is used for visual slideshows[cite: 193, 195]."
        },
        {
            text: "To change the background of a photograph, you would use:",
            options: ["Word processor", "Graphics software", "Spreadsheet", "OS"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Graphics software is designed for image editing and manipulation[cite: 198, 200]."
        },
        {
            text: "Utility software includes:",
            options: ["Word and Excel", "Antivirus and data compression", "Windows and Mac", "Chrome and Firefox"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Utilities are maintenance tools like antivirus or file compressors[cite: 203, 205]."
        },
        {
            text: "A translator that converts high-level code to machine code all at once is a:",
            options: ["Interpreter", "Compiler", "Assembler", "Utility"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "Compilers convert the entire source code into an executable file before running[cite: 208, 210]."
        },
        {
            text: "Which of these is a function of an operating system?",
            options: ["Designing a website", "Resource allocation and protection", "Writing a poem", "Calculating taxes"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "One core role of an OS is managing hardware resources and security[cite: 213, 215]."
        },
        {
            text: "Which OS is designed for handheld devices?",
            options: ["Windows Server", "iOS or Android", "Mainframe OS", "UNIX"],
            answer: 1,
            topic: "Operating Systems",
            explanation: "iOS and Android are mobile operating systems[cite: 219, 221]."
        },
        {
            text: "Batch systems were introduced to tackle the limitations of:",
            options: ["Time-sharing", "Serial processing", "Multiprogramming", "Virtualization"],
            answer: 1,
            topic: "OS History",
            explanation: "Batch systems improved efficiency by grouping similar jobs together[cite: 229, 231]."
        },
        {
            text: "Which type of software is a Database Management System (DBMS)?",
            options: ["System software", "Application software", "Utility", "Language"],
            answer: 1,
            topic: "Software Fundamentals",
            explanation: "A DBMS is a specialized application for managing structured data[cite: 234, 236]."
        }
    ]
};