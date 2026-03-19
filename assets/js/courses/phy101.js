export const phy101 = {
    code: "PHY101",
    title: "General Physics I",
    defaultTime: 60,
    questions: [
        {
            id: 1,
            topic: "Units and Dimensions",
            text: "The derived dimension $[ML^{-1}T^{-2}]$ is a dimension of:",
            options: ["Force", "Momentum", "Pressure", "Work", "Power"],
            answer: 2 // Option C: Pressure [cite: 133, 134]
        },
        {
            id: 2,
            topic: "Units and Dimensions",
            text: "The derived dimension $[ML^{2}T^{-2}]$ is a dimension of:",
            options: ["Force", "Impulse", "Pressure", "Work", "Speed"],
            answer: 3 // Option D: Work [cite: 135]
        },
        {
            id: 3,
            topic: "Units and Dimensions",
            text: "What are the correct dimensions for energy and force?",
            options: [
                "$MLT^{-1}$ and $MLT$", 
                "$ML^{2}T^{-2}$ and $MLT^{-2}$", 
                "$ML^{-3}T$ and $MLT^{2}$", 
                "$ML^{2}T^{-2}$ and $ML^{2}T^{2}$"
            ],
            answer: 1 // Option B [cite: 136, 138]
        }
    ]
};