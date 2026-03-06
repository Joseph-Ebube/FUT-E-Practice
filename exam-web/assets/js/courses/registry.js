import { eng101 } from './eng101.js';
import { cos101 } from './cos101.js'; // Import the new data

export const Registry = [
    {
        id: 'eng101',
        code: 'ENG101',
        title: 'Use of English I',
        description: 'Covers grammar, lexis, and structural analysis.',
        data: eng101,
        topics: ['Grammar', 'Oral English', 'Vocabulary']
    },
    // Add future courses here (e.g., mth101, gst111)

    {
        id: 'cos101',
        code: 'COS101',
        title: 'Introduction to Computing',
        data: cos101 // Link the new COS101 data here
    },
];