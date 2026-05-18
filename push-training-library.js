import { createClient } from '@supabase/supabase-js';
import psvData from './training-library/psv-training.json' assert { type: 'json' };
import bodaData from './training-library/boda-training.json' assert { type: 'json' };
import evData from './training-library/ev-training.json' assert { type: 'json' };
import schoolBusData from './training-library/school-bus-training.json' assert { type: 'json' };
import firstAidData from './training-library/first-aid-modules.json' assert { type: 'json' };

const supabase = createClient(
    'https://jeksrwrzzrczamxijvwl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs'
);

async function pushTrainingLibrary() {
    console.log('📚 Pushing training library to Supabase...\n');
    
    const courses = [psvData, bodaData, evData, schoolBusData];
    
    for (const course of courses) {
        // Update course info
        await supabase.from('courses').upsert({
            id: course.course_id,
            name: course.title,
            description: course.description,
            type: 'premium',
            price: course.price,
            duration: course.duration,
            level: course.level
        });
        
        // Push units
        for (const unit of course.units) {
            await supabase.from('course_units').upsert({
                course_id: course.course_id,
                unit_number: unit.unit_number,
                title: unit.title,
                content: unit.content,
                duration: unit.duration,
                key_points: unit.key_points
            });
            
            // Push quizzes if available
            if (unit.quiz) {
                for (const q of unit.quiz) {
                    await supabase.from('quiz_questions').insert({
                        course_id: course.course_id,
                        unit_number: unit.unit_number,
                        question: q.question,
                        options: q.options,
                        correct_answer: q.correct,
                        explanation: q.explanation
                    });
                }
            }
        }
        
        console.log(`✅ ${course.title} loaded`);
    }
    
    console.log('\n🎉 Training library complete!');
}

pushTrainingLibrary();
