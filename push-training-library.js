import { createClient } from '@supabase/supabase-js';

import psvData from './training-library/psv-training.json' with { type: 'json' };
import bodaData from './training-library/boda-training.json' with { type: 'json' };
import evData from './training-library/ev-training.json' with { type: 'json' };
import schoolBusData from './training-library/school-bus-training.json' with { type: 'json' };
import firstAidData from './training-library/first-aid-modules.json' with { type: 'json' };

const supabase = createClient(
  'https://jeksrwrzzrczamxijvwl.supabase.co',
  'YOUR_SUPABASE_ANON_KEY'
);

async function pushTrainingLibrary() {
  console.log('📚 Uploading training library...\n');

  const courses = [
    psvData,
    bodaData,
    evData,
    schoolBusData,
    firstAidData
  ];

  for (const course of courses) {
    try {

      // =========================
      // INSERT COURSE
      // =========================
      const { error: courseError } = await supabase
        .from('courses')
        .upsert({
          id: course.course_id,
          name: course.title,
          description: course.description,
          type: course.type || 'premium',
          price: course.price || 0,
          duration: course.duration,
          level: course.level,
          image_url: course.image_url || null
        });

      if (courseError) {
        console.error(`❌ Course Error (${course.title})`);
        console.error(courseError.message);
        continue;
      }

      console.log(`✅ Course added: ${course.title}`);

      // =========================
      // INSERT UNITS
      // =========================
      if (course.units && course.units.length > 0) {

        for (const unit of course.units) {

          const { error: unitError } = await supabase
            .from('course_units')
            .upsert({
              course_id: course.course_id,
              unit_number: unit.unit_number,
              title: unit.title,
              content: unit.content,
              duration: unit.duration || '30 mins',
              key_points: unit.key_points || [],
              image_url: unit.image_url || null
            });

          if (unitError) {
            console.error(`❌ Unit Error (${unit.title})`);
            console.error(unitError.message);
            continue;
          }

          console.log(`   📘 Unit added: ${unit.title}`);

          // =========================
          // INSERT QUIZZES
          // =========================
          if (unit.quiz && unit.quiz.length > 0) {

            for (const q of unit.quiz) {

              const { error: quizError } = await supabase
                .from('quiz_questions')
                .insert({
                  course_id: course.course_id,
                  unit_number: unit.unit_number,
                  question: q.question,
                  options: q.options,
                  correct_answer: q.correct,
                  explanation: q.explanation || ''
                });

              if (quizError) {
                console.error(`❌ Quiz Error`);
                console.error(quizError.message);
                continue;
              }

              console.log(`      📝 Quiz added`);
            }
          }
        }
      }

    } catch (err) {
      console.error(`🔥 Fatal Error`);
      console.error(err.message);
    }
  }

  console.log('\n🎉 ALL TRAINING DATA UPLOADED');
}

pushTrainingLibrary();
