import { eng101 } from './eng101.js';
import { cos101 } from './cos101.js'; // Import the new data
import { mth101 } from './mth101.js';
import { phy101 } from './phy101.js';

export const Registry = [
    {
        id: 'GST101',
        code: 'GST101',
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
   {
        id: 'mth101',
        code: 'MTH101',
        title: 'General Mathematics I',
        data: mth101
    },
    {
        id: 'phy101',
        code: 'PHY101',
        title: 'General Physics I',
        data: phy101
    }
];