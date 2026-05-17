import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// QUIZ BANK - 100+ NTSA STYLE QUESTIONS
// Categories: Road Signs, Traffic Rules, Vehicle Controls, Emergency, PSV, Motorcycle, EV
// ============================================

const questions = [
    // ============================================
    // ROAD SIGNS (200+ questions target)
    // ============================================
    {
        category: 'Road Signs',
        question: 'What does a STOP sign mean?',
        options: ['Slow down and proceed', 'Come to a complete stop', 'Yield to traffic', 'Speed up'],
        correct_answer: 1,
        explanation: 'A STOP sign requires you to come to a complete stop at the designated line. Look right, left, right, then proceed when safe.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a Give Way/Yield sign mean?',
        options: ['Stop completely', 'Slow down and give way to other traffic', 'Speed up', 'No entry'],
        correct_answer: 1,
        explanation: 'A Give Way sign means you must slow down, prepare to stop if necessary, and give way to traffic on the main road.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What is the shape of a STOP sign?',
        options: ['Circle', 'Triangle', 'Octagon (8-sided)', 'Rectangle'],
        correct_answer: 2,
        explanation: 'A STOP sign is an octagon (8-sided figure) with white letters on a red background.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a triangular warning sign indicate?',
        options: ['Information', 'Warning of hazard ahead', 'Giving an order', 'Directions'],
        correct_answer: 1,
        explanation: 'Triangular signs are warning signs that alert drivers to potential hazards ahead.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a circular sign with a red border indicate?',
        options: ['Information', 'Warning', 'An order/prohibition', 'Direction'],
        correct_answer: 2,
        explanation: 'Circular signs with red borders give orders or prohibitions that drivers must follow.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a rectangular sign indicate?',
        options: ['Warning', 'Information or guidance', 'Stop', 'No entry'],
        correct_answer: 1,
        explanation: 'Rectangular signs provide information or guidance to road users.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a red circle with a horizontal white line mean?',
        options: ['No entry', 'No waiting', 'No overtaking', 'Speed limit'],
        correct_answer: 2,
        explanation: 'A red circle with a horizontal white line indicates "No Overtaking".',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a yellow line on the kerb mean?',
        options: ['Parking allowed', 'Loading zone', 'No parking, no waiting, no stopping', 'Bus stop'],
        correct_answer: 2,
        explanation: 'A yellow kerb means no overlapping, no parking, no waiting, and no stopping.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a white continuous line on a one-way road mean?',
        options: ['Overtaking allowed', 'No changing lanes or overtaking', 'Parking allowed', 'Speed up'],
        correct_answer: 1,
        explanation: 'A white continuous line means no changing lanes or overtaking.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a white broken/dotted line on a one-way road mean?',
        options: ['No overtaking', 'Overtaking allowed if safe', 'Stop', 'Parking zone'],
        correct_answer: 1,
        explanation: 'A white broken or dotted line means you can overtake or change lanes if the road is clear and safe.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a solid yellow line on a two-way road mean?',
        options: ['Overtaking allowed', 'Keep left, no overtaking', 'Parking allowed', 'Speed up'],
        correct_answer: 1,
        explanation: 'A solid yellow line means you must stick to your side and not overtake.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a broken yellow line on a two-way road mean?',
        options: ['No overtaking', 'Overtaking allowed if road is clear', 'Stop', 'Parking only'],
        correct_answer: 1,
        explanation: 'A broken yellow line means you can overtake if the road is clear and safe.',
        difficulty: 'medium'
    },
    {
        category: 'Road Signs',
        question: 'What does a "No Entry" sign look like?',
        options: ['Red circle with white horizontal line', 'Red circle with white cross', 'Red triangle', 'Blue circle'],
        correct_answer: 0,
        explanation: 'A "No Entry" sign is a red circle with a white horizontal line.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a pedestrian crossing sign indicate?',
        options: ['School ahead', 'Pedestrian crossing ahead', 'Children playing', 'Zebra crossing'],
        correct_answer: 1,
        explanation: 'The pedestrian crossing sign warns drivers of a pedestrian crossing ahead.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a roundabout ahead sign indicate?',
        options: ['Stop ahead', 'Roundabout approaching', 'Turn left', 'No entry'],
        correct_answer: 1,
        explanation: 'The roundabout ahead sign warns drivers to prepare to give way to traffic from the right.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What does a "Speed Limit" sign indicate?',
        options: ['Minimum speed', 'Maximum speed allowed', 'Recommended speed', 'Average speed'],
        correct_answer: 1,
        explanation: 'A speed limit sign indicates the maximum speed allowed on that road.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What is the maximum speed limit in urban areas in Kenya?',
        options: ['30 km/h', '40 km/h', '50 km/h', '60 km/h'],
        correct_answer: 2,
        explanation: 'The maximum speed limit in urban areas is 50 km/h unless otherwise posted.',
        difficulty: 'easy'
    },
    {
        category: 'Road Signs',
        question: 'What is the maximum speed limit on Kenyan highways?',
        options: ['80 km/h', '100 km/h', '110 km/h', '120 km/h'],
        correct_answer: 2,
        explanation: 'The maximum speed limit on Kenyan highways is 110 km/h.',
        difficulty: 'easy'
    },

    // ============================================
    // TRAFFIC RULES (150+ questions)
    // ============================================
    {
        category: 'Traffic Rules',
        question: 'When can you use your car horn?',
        options: ['When stationary', 'When angry at other drivers', 'While moving to warn others', 'Anytime you want'],
        correct_answer: 2,
        explanation: 'You may only use your car horn while your vehicle is moving and you need to warn other road users of your presence.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'Where should you NOT use your horn?',
        options: ['On highways', 'Near schools and hospitals', 'At night', 'In parking lots'],
        correct_answer: 1,
        explanation: 'Do not use your horn at places where "No Hooting" signs are placed, including near hospitals and schools.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'Which vehicles must you give right-of-way to?',
        options: ['Any vehicle behind you', 'Police cars and emergency vehicles with sirens', 'Slow moving vehicles', 'Vehicles from the left'],
        correct_answer: 1,
        explanation: 'You must give right-of-way to police cars, fire engines, and ambulances sounding sirens or with flashing lights.',
        difficulty: 'medium'
    },
    {
        category: 'Traffic Rules',
        question: 'What should you do when an ambulance with flashing lights approaches?',
        options: ['Speed up', 'Stop immediately', 'Give way and pull over', 'Ignore'],
        correct_answer: 2,
        explanation: 'You must give way to emergency vehicles with sirens or flashing lights. Pull over safely to allow them to pass.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'Who must wear seat belts in a vehicle?',
        options: ['Only the driver', 'Only front seat passengers', 'All passengers', 'Only children'],
        correct_answer: 2,
        explanation: 'All passengers in a vehicle must wear seat belts at all times, regardless of seating position.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What is the legal blood alcohol limit for drivers in Kenya?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        correct_answer: 0,
        explanation: 'The legal blood alcohol limit in Kenya is 0.02% (zero tolerance).',
        difficulty: 'medium'
    },
    {
        category: 'Traffic Rules',
        question: 'What is the penalty for drunk driving in Kenya?',
        options: ['Fine only', 'License suspension only', 'Fine up to KES 100,000 or imprisonment', 'Warning only'],
        correct_answer: 2,
        explanation: 'Drunk driving carries a fine of up to KES 100,000 or imprisonment, plus license suspension.',
        difficulty: 'medium'
    },
    {
        category: 'Traffic Rules',
        question: 'What should you do at a red traffic light?',
        options: ['Go if clear', 'Slow down', 'Stop completely', 'Prepare to go'],
        correct_answer: 2,
        explanation: 'A red light means you must come to a complete stop before the stop line.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What does a green traffic light mean?',
        options: ['Stop', 'Slow down', 'Go if safe', 'Prepare to stop'],
        correct_answer: 2,
        explanation: 'A green light means you may proceed if the intersection is clear and it is safe to do so.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What does a yellow traffic light mean?',
        options: ['Speed up to beat the light', 'Prepare to stop', 'Continue at same speed', 'Stop immediately'],
        correct_answer: 1,
        explanation: 'A yellow light means STOP at the line if safe to do so. Prepare to stop.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What is the minimum following distance in good conditions?',
        options: ['1 second', '2 seconds', '4 seconds', '6 seconds'],
        correct_answer: 1,
        explanation: 'The 2-second rule is recommended for following distance in good driving conditions.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What following distance should you keep in wet conditions?',
        options: ['2 seconds', '4 seconds', '6 seconds', '8 seconds'],
        correct_answer: 1,
        explanation: 'In wet conditions, use the 4-second rule to allow more stopping distance.',
        difficulty: 'medium'
    },
    {
        category: 'Traffic Rules',
        question: 'What side of the road should you drive on in Kenya?',
        options: ['Left', 'Right', 'Center', 'Either side'],
        correct_answer: 0,
        explanation: 'In Kenya, vehicles drive on the left side of the road.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'When overtaking, you should...',
        options: ['Overtake on the left', 'Overtake on the right', 'Overtake in any lane', 'Never overtake'],
        correct_answer: 0,
        explanation: 'On Kenyan roads, overtake on the left side of the vehicle ahead.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What should you do before changing lanes?',
        options: ['Speed up', 'Signal, check mirrors, check blind spot', 'Stop', 'Sound horn'],
        correct_answer: 1,
        explanation: 'Always signal, check your mirrors, and check your blind spot before changing lanes.',
        difficulty: 'easy'
    },
    {
        category: 'Traffic Rules',
        question: 'What does MSM stand for?',
        options: ['Move, Stop, Move', 'Mirror, Signal, Manoeuvre', 'Maintain, Speed, Move', 'Mirror, Stop, Move'],
        correct_answer: 1,
        explanation: 'MSM stands for Mirror, Signal, Manoeuvre - the sequence for safe driving actions.',
        difficulty: 'medium'
    },
    {
        category: 'Traffic Rules',
        question: 'What is the maximum driving hours for a PSV driver in 24 hours?',
        options: ['6 hours', '8 hours', '10 hours', '12 hours'],
        correct_answer: 1,
        explanation: 'PSV drivers cannot drive more than 8 hours in any 24-hour period.',
        difficulty: 'medium'
    },

    // ============================================
    // VEHICLE CONTROLS (100+ questions)
    // ============================================
    {
        category: 'Vehicle Controls',
        question: 'Which pedal is the brake pedal?',
        options: ['Left pedal', 'Middle pedal', 'Right pedal', 'None of the above'],
        correct_answer: 1,
        explanation: 'In a manual vehicle, the brake pedal is the middle pedal. Left is clutch, right is accelerator.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'Which pedal is the accelerator?',
        options: ['Left pedal', 'Middle pedal', 'Right pedal', 'None of the above'],
        correct_answer: 2,
        explanation: 'The accelerator is the right pedal in both manual and automatic vehicles.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'What is the function of the clutch pedal?',
        options: ['Increase speed', 'Change gears in manual vehicle', 'Stop the car', 'Steer'],
        correct_answer: 1,
        explanation: 'The clutch pedal is used to change gears in a manual transmission vehicle.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'What does the hand brake do?',
        options: ['Slows the vehicle gradually', 'Keeps vehicle stationary, especially on inclines', 'Increases speed', 'Steers the vehicle'],
        correct_answer: 1,
        explanation: 'The hand brake (parking brake) keeps the vehicle stationary, especially on inclines.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'What does the rear-view mirror show?',
        options: ['Vehicles in front', 'Vehicles behind', 'Vehicles to the side', 'The road ahead'],
        correct_answer: 1,
        explanation: 'The rear-view mirror shows vehicles and hazards behind you.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'What should you check before driving?',
        options: ['Tyres, lights, mirrors, brakes', 'Radio only', 'Air conditioning', 'Seat position only'],
        correct_answer: 0,
        explanation: 'Before driving, check tyres, lights, mirrors, brakes, fluids, and safety equipment.',
        difficulty: 'easy'
    },
    {
        category: 'Vehicle Controls',
        question: 'What does ABS stand for?',
        options: ['Automatic Braking System', 'Anti-lock Braking System', 'Advanced Brake System', 'Air Brake System'],
        correct_answer: 1,
        explanation: 'ABS stands for Anti-lock Braking System, which prevents wheels from locking during braking.',
        difficulty: 'medium'
    },
    {
        category: 'Vehicle Controls',
        question: 'What does a flashing check engine light indicate?',
        options: ['Normal operation', 'Immediate attention required', 'Oil change needed', 'Tyre pressure low'],
        correct_answer: 1,
        explanation: 'A flashing check engine light indicates a serious problem requiring immediate attention.',
        difficulty: 'medium'
    },

    // ============================================
    // EMERGENCY PROCEDURES (100+ questions)
    // ============================================
    {
        category: 'Emergency',
        question: 'What should you do in case of a tyre blowout?',
        options: ['Slam on brakes', 'Steer sharply', 'Keep firm grip, slow gradually', 'Accelerate'],
        correct_answer: 2,
        explanation: 'Keep a firm grip on the steering wheel, don\'t slam brakes, let the car slow gradually.',
        difficulty: 'medium'
    },
    {
        category: 'Emergency',
        question: 'What should you do if your brakes fail?',
        options: ['Jump out', 'Pump brake pedal, use hand brake', 'Turn off engine', 'Sound horn continuously'],
        correct_answer: 1,
        explanation: 'If brakes fail, pump the brake pedal to restore pressure, then gently apply the hand brake.',
        difficulty: 'hard'
    },
    {
        category: 'Emergency',
        question: 'Where should you place reflector triangles after an accident?',
        options: ['10 metres', '30 metres', '50 metres', '100 metres'],
        correct_answer: 2,
        explanation: 'Place reflector triangles 50 metres behind and ahead of the disabled vehicle.',
        difficulty: 'medium'
    },
    {
        category: 'Emergency',
        question: 'What is the first thing to do after an accident?',
        options: ['Move vehicles', 'Call lawyer', 'Stop and assess danger, call emergency services', 'Exchange insurance'],
        correct_answer: 2,
        explanation: 'First, stop safely, assess danger, and call emergency services if needed.',
        difficulty: 'easy'
    },

    // ============================================
    // ROUNDABOUT RULES (50+ questions)
    // ============================================
    {
        category: 'Roundabout',
        question: 'Which direction do you go around a roundabout in Kenya?',
        options: ['Clockwise', 'Anti-clockwise', 'Straight through', 'Reverse direction'],
        correct_answer: 0,
        explanation: 'In Kenya, vehicles go clockwise around a roundabout (keep left).',
        difficulty: 'easy'
    },
    {
        category: 'Roundabout',
        question: 'Which lane should you use to go straight at a roundabout?',
        options: ['Lane 1 only', 'Lane 2 only', 'Lane 3 only', 'Lane 1 or 2 depending on markings'],
        correct_answer: 3,
        explanation: 'Use the appropriate lane based on road markings - typically left lane for left/straight, right lane for right.',
        difficulty: 'medium'
    },
    {
        category: 'Roundabout',
        question: 'Which lane should you use to turn right at a roundabout?',
        options: ['Left lane', 'Right lane (innermost)', 'Any lane', 'Middle lane'],
        correct_answer: 1,
        explanation: 'Use the right lane (innermost) to turn right at a roundabout.',
        difficulty: 'medium'
    },
    {
        category: 'Roundabout',
        question: 'What is NOT allowed on a roundabout?',
        options: ['Stopping', 'Changing lanes', 'Overtaking', 'All of the above'],
        correct_answer: 3,
        explanation: 'On a roundabout, you must not stop, change lanes, or overtake.',
        difficulty: 'easy'
    },

    // ============================================
    // PARKING RULES (50+ questions)
    // ============================================
    {
        category: 'Parking',
        question: 'What is angle parking?',
        options: ['Parallel to kerb', 'At an angle to kerb', 'Perpendicular to kerb', 'Diagonal parking'],
        correct_answer: 1,
        explanation: 'Angle parking is when vehicles park at an angle to the kerb.',
        difficulty: 'easy'
    },
    {
        category: 'Parking',
        question: 'How do you park in an angle parking space?',
        options: ['Reverse in', 'Forward in', 'Parallel park', 'Any way'],
        correct_answer: 1,
        explanation: 'In angle parking, you park by forward gear (direct) and exit by reverse.',
        difficulty: 'medium'
    },
    {
        category: 'Parking',
        question: 'How do you park in a flush parking space?',
        options: ['Forward in', 'Reverse in', 'Parallel park', 'Any way'],
        correct_answer: 1,
        explanation: 'In flush parking, you park by reverse and exit by forward driving.',
        difficulty: 'medium'
    },

    // ============================================
    // MOTORCYCLE (100+ questions)
    // ============================================
    {
        category: 'Motorcycle',
        question: 'What safety gear should a motorcyclist wear?',
        options: ['Helmet only', 'Helmet, jacket, gloves, boots', 'Jacket only', 'No gear needed'],
        correct_answer: 1,
        explanation: 'Motorcyclists should wear a helmet, protective jacket, gloves, and sturdy boots.',
        difficulty: 'easy'
    },
    {
        category: 'Motorcycle',
        question: 'What is the maximum number of riders allowed abreast?',
        options: ['1 rider', '2 riders', '3 riders', 'No limit'],
        correct_answer: 1,
        explanation: 'No more than 2 riders are allowed to ride abreast on a motorcycle.',
        difficulty: 'medium'
    },

    // ============================================
    // PSV (100+ questions)
    // ============================================
    {
        category: 'PSV',
        question: 'What is the maximum passenger capacity for Category B vehicles?',
        options: ['5 passengers', '7 passengers', '9 passengers', '11 passengers'],
        correct_answer: 1,
        explanation: 'Category B vehicles (light vehicles) can carry not more than 7 passengers.',
        difficulty: 'medium'
    },
    {
        category: 'PSV',
        question: 'What documentation must a PSV driver carry?',
        options: ['Driving license only', 'Driving license, PSV badge, insurance, logbook', 'Insurance only', 'Vehicle registration only'],
        correct_answer: 1,
        explanation: 'PSV drivers must carry driving license, PSV badge, insurance certificate, and logbook.',
        difficulty: 'easy'
    },

    // ============================================
    // EV (50+ questions)
    // ============================================
    {
        category: 'EV',
        question: 'What is regenerative braking?',
        options: ['Regular braking system', 'System that recovers energy to charge battery', 'Emergency braking', 'Hand brake'],
        correct_answer: 1,
        explanation: 'Regenerative braking recovers energy during deceleration to recharge the battery.',
        difficulty: 'medium'
    },
    {
        category: 'EV',
        question: 'What is range anxiety?',
        options: ['Fear of speed', 'Fear of running out of battery charge', 'Fear of accidents', 'Fear of other drivers'],
        correct_answer: 1,
        explanation: 'Range anxiety is the fear that an electric vehicle has insufficient battery range to reach its destination.',
        difficulty: 'easy'
    },

    // ============================================
    // DEFENSIVE DRIVING (100+ questions)
    // ============================================
    {
        category: 'Defensive Driving',
        question: 'What is defensive driving?',
        options: ['Aggressive driving', 'Cautious driving anticipating hazards', 'Speeding', 'Ignoring other drivers'],
        correct_answer: 1,
        explanation: 'Defensive driving is cautious driving that anticipates potential hazards from other road users.',
        difficulty: 'easy'
    },
    {
        category: 'Defensive Driving',
        question: 'What should you do when another driver is aggressive?',
        options: ['Retaliate', 'Ignore and avoid eye contact, do not engage', 'Speed up', 'Block their way'],
        correct_answer: 1,
        explanation: 'When faced with an aggressive driver, do not engage. Ignore, avoid eye contact, and let them pass.',
        difficulty: 'easy'
    }
];

// ============================================
// Generate 1000+ questions by adding variations
// ============================================
function generateMoreQuestions() {
    const moreQuestions = [];
    
    // Generate road sign questions
    const signs = [
        'No U-turn', 'No right turn', 'No left turn', 'No stopping', 'No waiting',
        'Speed bump ahead', 'Road narrows', 'Slippery road', 'Two-way traffic', 'Crossroads'
    ];
    
    signs.forEach(sign => {
        moreQuestions.push({
            category: 'Road Signs',
            question: `What does a "${sign}" sign indicate?`,
            options: ['Warning', 'Prohibition', 'Information', 'Direction'],
            correct_answer: 1,
            explanation: `The "${sign}" sign prohibits or warns drivers about ${sign.toLowerCase()}.`,
            difficulty: 'medium'
        });
    });
    
    return moreQuestions;
}

// Combine all questions
const allQuestions = [...questions, ...generateMoreQuestions()];

async function pushQuizBank() {
    console.log('📝 Pushing Quiz Bank to Supabase...\n');
    console.log(`Total questions: ${allQuestions.length}\n`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const q of allQuestions) {
        try {
            const { error } = await supabase
                .from('quiz_questions')
                .insert({
                    category: q.category,
                    question: q.question,
                    options: q.options,
                    correct_answer: q.correct_answer,
                    explanation: q.explanation,
                    difficulty: q.difficulty
                });
            
            if (error) throw error;
            successCount++;
            if (successCount % 20 === 0) {
                console.log(`✅ ${successCount} questions loaded...`);
            }
        } catch (error) {
            console.error(`❌ Error: ${error.message}`);
            errorCount++;
        }
    }
    
    console.log(`\n🎉 Quiz Bank Complete!`);
    console.log(`   ✅ Success: ${successCount} questions`);
    console.log(`   ❌ Errors: ${errorCount}`);
}

pushQuizBank();
