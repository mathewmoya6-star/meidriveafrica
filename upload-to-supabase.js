import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Supabase configuration
const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// COURSES DATA (7 Driver Courses)
// ============================================
const courses = [
    {
        id: 1,
        title: '🚗 Learner Hub',
        description: 'Complete NTSA-approved driver training for new drivers. Covers all 21 units from introduction to advanced driving techniques.',
        content: `The Learner Hub is a comprehensive driver training program covering:

📚 UNIT 1: INTRODUCTION TO DRIVING
Motor vehicles are an important part of our day-to-day living. The goal of driver training is to equip you with the right knowledge of how to handle your vehicle and act appropriately on the road.

📚 UNIT 2: FUNDAMENTAL DRIVING RULES
The road is governed by rules from The Traffic Act and The Highway Code. Learn about horn usage, right-of-way for emergency vehicles, pedestrian rights, and traffic signs.

📚 UNIT 3: MODEL TOWN
Understand road networks through model town simulation including one-way roads, two-way roads, roundabouts, parking zones, yellow kerb, pedestrian crossings, and stop/give way signs.

📚 UNIT 4: HUMAN FACTORS IN TRAFFIC
Learn observation techniques, health and safety, fatigue management, avoiding distractions, effects of alcohol/drugs, safety belt usage, and emergency equipment.

📚 UNIT 5: VEHICLE CONSTRUCTIONS AND CONTROLS
Understand all vehicle components: steering wheel, gear lever, hand brake, pedals, mirrors, speedometer, temperature gauge, and vehicle systems.

📚 UNIT 6: SELF-INSPECTION OF VEHICLE
Master pre-journey inspection including tyres, lights, mirrors, wipers, body, safety belts, emergency equipment, brakes, steering, transmission, fluids, and battery.

📚 UNIT 7: OBSERVATION
Master driver visibility, mirror usage (rear view and exterior), blind spot awareness, hazard identification, and proper mirror adjustment.

📚 UNIT 8: VEHICLE CONTROL
Learn driving preparation, starting/stopping procedures, gear usage (1st to 5th), steering techniques, parking (angle, flush, parallel), turns (J-turns, U-turns), driving on bends/hills, and reversing.

📚 UNIT 9: COMMUNICATION ON THE ROAD
Learn MSM technique (Mirror, Signal, Manoeuvre), hand signals, light signals, traffic light signals, and communication with traffic police.

📚 UNIT 10: SPEED MANAGEMENT
Understand the 4 Second Rule, braking distance, thinking distance, stopping distance, braking systems, and progressive braking techniques.

📚 UNIT 11: SPACE MANAGEMENT
Master open/closed/changing road conditions, space envelope management, space recovery techniques, and positioning to "see and be seen".

📚 UNIT 12: EMERGENCY MANOEUVRES
Learn evasive turns (J-turns, U-turns), brake failure procedures, blowout handling, headlight failure, and defensive driving techniques.

📚 UNIT 13: SKID CONTROL AND RECOVERY
Understand front wheel skid, rear wheel skid, aquaplaning, skid causes, and skid recovery techniques.

📚 UNIT 14: ADVERSE DRIVING CONDITIONS
Master night driving, fog driving, rain driving, reduced traction, emergency steering methods, and ABS braking techniques.

📚 UNIT 15: PREVENTIVE MAINTENANCE
Learn vehicle inspection, lubrication, adjustment, cleaning, testing, repair, and troubleshooting common issues.

📚 UNIT 16: CONDITIONS OF CARRIAGE
Understand customer rights, driver obligations, PSV requirements, fare pricing, code of conduct, and lost property procedures.

📚 UNIT 17: HAZARDOUS MATERIALS
Learn about 9 classes of hazardous materials, characteristics (flammable, corrosive, reactive, toxic), and licensing requirements.

📚 UNIT 18: EMERGENCY PROCEDURES
Learn crash scene management, First Aid (Dr. A.B.C), recovery position, bleeding treatment, shock treatment, and accident reporting.

📚 UNIT 19: WORK PLANNING
Master trip planning, distance/time management, fatigue prevention, adverse weather precautions, and legal limits (max 8 hours driving).

📚 UNIT 20: CUSTOMER CARE
Develop communication skills, handling customer expectations, special needs customers, sexual harassment prevention, anti-discrimination, and personal hygiene.

📚 UNIT 21: THE EXAMINATION - 1000 QUIZ BANK
Complete NTSA exam preparation with 1000+ practice questions covering all 20 units, traffic signs, model town illustrations, and regulations.

🎯 WHAT YOU'LL LEARN:
• Kenyan traffic laws and Highway Code
• Model town navigation (one-way, two-way, roundabouts)
• Vehicle controls and self-inspection
• MSM communication technique
• Speed and space management
• Emergency manoeuvres and skid recovery
• Defensive driving techniques

✅ INCLUDES:
• Certificate upon completion
• Practice quizzes
• Final examination preparation
• Lifetime access to materials`,
        type: 'premium',
        price: 5000,
        duration: '40 hours',
        level: 'Beginner to Advanced',
        unit_number: 1,
        category: 'learner'
    },
    {
        id: 2,
        title: '🚌 PSV (Public Service Vehicle)',
        description: 'Specialized training for matatu, bus, and taxi drivers focusing on passenger safety, commercial driving regulations, and customer service.',
        content: `The PSV Course is designed specifically for public service vehicle operators:

📋 COURSE MODULES:
• PSV Licensing requirements (NTSA)
• Passenger safety and rights
• Route planning and time management
• Defensive driving for commercial vehicles
• Customer service excellence
• Fare management and ticketing
• Vehicle inspection for PSV
• Emergency procedures with passengers
• Load management and luggage handling
• PSV code of conduct

🎯 KEY FOCUS AREAS:
• Traffic Act regulations for PSV
• Speed governors and compliance
• Rest hour management (max 8 hours driving)
• Accident reporting procedures
• Handling difficult passengers
• Lost property procedures

✅ CERTIFICATION:
• NTSA PSV Certificate
• Defensive driving certification
• Customer service excellence badge`,
        type: 'premium',
        price: 7500,
        duration: '25 hours',
        level: 'Intermediate',
        unit_number: 2,
        category: 'psv'
    },
    {
        id: 3,
        title: '🚸 School Bus/Van Driver',
        description: 'Specialized safety training for school transport drivers focusing on child safety, route management, and emergency protocols.',
        content: `The School Transport Safety Course covers:

📋 CORE MODULES:
• Child passenger safety protocols
• Loading and unloading procedures
• Student behaviour management
• Emergency evacuation drills
• First aid for children
• Route risk assessment
• Vehicle inspection for school transport
• Communication with schools and parents
• Anti-bullying on transport
• Special needs student transport

🎯 SAFETY FOCUS:
• No child left behind procedures
• Crossing guard protocols
• School zone speed management
• Stop arm compliance
• Student tracking systems
• Emergency contact procedures

✅ CERTIFICATION:
• School Transport Safety Certificate
• Pediatric First Aid certified
• Defensive Driving certified
• Background check clearance`,
        type: 'premium',
        price: 6500,
        duration: '20 hours',
        level: 'Intermediate',
        unit_number: 3,
        category: 'school-bus'
    },
    {
        id: 4,
        title: '⚡ EV Vehicle Course',
        description: 'Master electric vehicle driving, charging management, and EV-specific safety protocols for modern sustainable transport.',
        content: `The Electric Vehicle (EV) Course covers:

📋 EV-SPECIFIC TRAINING:
• EV vehicle controls and dashboard
• Regenerative braking systems
• Battery management and range optimization
• Charging station types (Level 1,2,3)
• Public vs home charging
• EV maintenance (no oil changes, battery health)
• EV safety (high voltage systems)
• Silent operation awareness for pedestrians
• Range anxiety management
• Emergency procedures for EVs

🎯 TECHNICAL KNOWLEDGE:
• Battery degradation factors
• Charging time calculations
• Cost comparison (EV vs fuel)
• Eco-driving techniques
• Regenerative braking mastery
• Thermal management systems

✅ CERTIFICATION:
• EV Driver Certification
• Eco-driving Specialist
• Charging Network Pro
• Green Transport Ambassador`,
        type: 'premium',
        price: 8000,
        duration: '15 hours',
        level: 'Beginner to Intermediate',
        unit_number: 4,
        category: 'ev'
    },
    {
        id: 5,
        title: '🛵 Boda Boda (Motorcycle)',
        description: 'Professional motorcycle taxi training covering safety, passenger transport, and defensive riding techniques.',
        content: `The Boda Boda Professional Course covers:

📋 CORE TRAINING:
• Motorcycle controls and balance
• Protective gear (helmet, jacket, gloves)
• Passenger safety protocols
• Luggage and cargo management
• Defensive riding techniques
• Night riding safety
• Wet weather riding
• Emergency braking and swerving
• Pillion passenger communication
• Route optimization for deliveries

🎯 PROFESSIONAL SKILLS:
• Pricing and fare negotiation
• Customer service for riders
• App-based dispatch systems
• First aid for accidents
• Breakdown procedures
• Insurance requirements
• NTSA motorcycle regulations

✅ CERTIFICATION:
• Professional Boda Boda License
• Defensive Riding Certificate
• First Aid certified
• Customer Service Excellence`,
        type: 'premium',
        price: 5500,
        duration: '20 hours',
        level: 'Beginner',
        unit_number: 5,
        category: 'boda-boda'
    },
    {
        id: 6,
        title: '📚 e-Safety Library',
        description: 'Free comprehensive road safety resources, guides, and educational materials for all road users.',
        content: `The e-Safety Library provides FREE access to:

📖 SAFETY RESOURCES:
• Road safety guides for pedestrians
• Cyclist safety handbook
• Child road safety education
• Elderly road user guidelines
• Defensive driving articles
• Weather-specific driving tips
• Emergency response guides
• First aid reference manual

📋 INTERACTIVE CONTENT:
• Safety quizzes and assessments
• Infographics and posters
• Video tutorials
• Case studies of common accidents
• Legal reference (Traffic Act, Highway Code)
• Seasonal safety campaigns

✅ FREE FEATURES:
• Unlimited access to all resources
• Downloadable PDF guides
• Regular safety updates
• Community forum access
• Safety tips newsletter

🆓 COMPLETELY FREE - No payment required`,
        type: 'free',
        price: 0,
        duration: 'Self-paced',
        level: 'All levels',
        unit_number: 6,
        category: 'safety'
    },
    {
        id: 7,
        title: '📝 Quiz Bank (1000+ Questions)',
        description: 'Comprehensive exam preparation with 1000+ NTSA-style practice questions covering all driving categories.',
        content: `The Ultimate Quiz Bank features:

📊 QUESTION CATEGORIES:
• Road signs (200+ questions)
• Traffic Act regulations (150+)
• Vehicle controls and maintenance (100+)
• Defensive driving scenarios (150+)
• Emergency procedures (100+)
• PSV specific (100+)
• Motorcycle specific (100+)
• EV specific (50+)
• Model town navigation (50+)
• First aid and safety (50+)

🎯 QUIZ FEATURES:
• Timed practice tests
• Category-specific quizzes
• Random question generator
• Progress tracking
• Weak area identification
• Detailed answer explanations
• Mock NTSA examinations

📈 EXAM SIMULATION:
• Real NTSA exam format
• Time limits per section
• Pass/fail scoring
• Review incorrect answers
• Track improvement over time

✅ INCLUDES:
• Mobile-friendly interface
• Offline mode available
• Progress sync across devices
• Certificate of completion
• Lifetime access to updates`,
        type: 'premium',
        price: 3000,
        duration: 'Self-paced',
        level: 'All levels',
        unit_number: 7,
        category: 'quiz'
    }
];

// ============================================
// TRAFFIC SIGNS DATA
// ============================================
const trafficSigns = [
    { sign_name: 'Stop', sign_type: 'regulatory', meaning: 'Come to a complete stop', action_required: 'Stop completely, look right, left, right, then proceed if clear' },
    { sign_name: 'Give Way/Yield', sign_type: 'regulatory', meaning: 'Yield to other traffic', action_required: 'Slow down, prepare to stop, give way to traffic on main road' },
    { sign_name: 'No Entry', sign_type: 'regulatory', meaning: 'Do not enter this road', action_required: 'Do not enter, find alternative route' },
    { sign_name: 'Speed Limit', sign_type: 'regulatory', meaning: 'Maximum speed allowed', action_required: 'Do not exceed the indicated speed limit' },
    { sign_name: 'No Overtaking', sign_type: 'regulatory', meaning: 'Overtaking prohibited', action_required: 'Do not overtake other vehicles in this zone' },
    { sign_name: 'Pedestrian Crossing', sign_type: 'warning', meaning: 'Pedestrian crossing ahead', action_required: 'Slow down, be prepared to stop for pedestrians' },
    { sign_name: 'Roundabout Ahead', sign_type: 'warning', meaning: 'Roundabout approaching', action_required: 'Reduce speed, prepare to give way to traffic from the right' }
];

// ============================================
// DRIVING RULES DATA
// ============================================
const drivingRules = [
    { rule_category: 'Horn Usage', rule_title: 'Use of Horn', rule_description: 'Use horn only while moving to warn others. No aggressive use or in no-hooting zones.', penalty: 'Fine up to KES 5,000' },
    { rule_category: 'Right of Way', rule_title: 'Emergency Vehicles', rule_description: 'Give way to police, fire engines, ambulances with sirens/flashing lights.', penalty: 'Fine up to KES 10,000' },
    { rule_category: 'Alcohol', rule_title: 'Drunk Driving', rule_description: 'Do not drink and drive. Alcohol slows brain functions and affects judgment.', penalty: 'Fine up to KES 100,000' },
    { rule_category: 'Safety Belts', rule_title: 'Seat Belt Usage', rule_description: 'All passengers must wear seat belts at all times.', penalty: 'Fine up to KES 5,000' },
    { rule_category: 'Mobile Phones', rule_title: 'Handheld Devices', rule_description: 'No cell phone use while driving.', penalty: 'Fine up to KES 10,000' }
];

// ============================================
// MODEL TOWN FEATURES
// ============================================
const modelTownFeatures = [
    { feature_name: 'One Way Traffic Road', description: 'Road where all vehicles move in one direction (Dual Carriage Way)', rules: ['White continuous line = no changing lanes', 'White broken line = overtaking allowed if safe', 'Yellow kerb = no parking, waiting, or stopping'] },
    { feature_name: 'Roundabout', description: 'Meeting point where more than two roads meet', rules: ['No stopping', 'No changing lanes', 'No parking', 'No overtaking', 'Keep left and move clockwise'] },
    { feature_name: 'Angle Parking', description: 'Controlled parking zone', rules: ['Strictly for small cars only', 'Park from farthest end', 'Park by forward gear', 'Exit by reverse'] },
    { feature_name: 'Flush Parking', description: 'Uncontrolled parking zone on left side', rules: ['All vehicle types allowed', 'Park from farthest end', 'Park by reverse', 'Exit by forward driving'] }
];

// ============================================
// UPLOAD FUNCTION
// ============================================
async function uploadToSupabase() {
    console.log('🚀 Starting upload to Supabase...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // 1. Upload Courses
    console.log('📚 Uploading courses...');
    for (const course of courses) {
        try {
            const { error } = await supabase
                .from('courses')
                .upsert(course, { onConflict: 'id' });
            
            if (error) throw error;
            console.log(`✅ Course ${course.id}: ${course.title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Course ${course.id}: ${error.message}`);
            errorCount++;
        }
    }
    
    // 2. Upload Traffic Signs
    console.log('\n🚦 Uploading traffic signs...');
    for (const sign of trafficSigns) {
        try {
            const { error } = await supabase
                .from('traffic_signs')
                .upsert(sign, { onConflict: 'sign_name' });
            
            if (error) throw error;
            console.log(`✅ ${sign.sign_name}`);
            successCount++;
        } catch (error) {
            console.error(`❌ ${sign.sign_name}: ${error.message}`);
            errorCount++;
        }
    }
    
    // 3. Upload Driving Rules
    console.log('\n📋 Uploading driving rules...');
    for (const rule of drivingRules) {
        try {
            const { error } = await supabase
                .from('driving_rules')
                .upsert(rule, { onConflict: 'rule_title' });
            
            if (error) throw error;
            console.log(`✅ ${rule.rule_title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ ${rule.rule_title}: ${error.message}`);
            errorCount++;
        }
    }
    
    // 4. Upload Model Town Features
    console.log('\n🏘️ Uploading model town features...');
    for (const feature of modelTownFeatures) {
        try {
            const { error } = await supabase
                .from('model_town_features')
                .upsert(feature, { onConflict: 'feature_name' });
            
            if (error) throw error;
            console.log(`✅ ${feature.feature_name}`);
            successCount++;
        } catch (error) {
            console.error(`❌ ${feature.feature_name}: ${error.message}`);
            errorCount++;
        }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log(`📊 UPLOAD SUMMARY:`);
    console.log(`   ✅ Success: ${successCount} items`);
    console.log(`   ❌ Errors: ${errorCount} items`);
    console.log('='.repeat(50));
    
    // Verify upload
    console.log('\n🔍 Verifying upload...');
    const { data: verifiedCourses, error: verifyError } = await supabase
        .from('courses')
        .select('id, title, type, price')
        .order('id');
    
    if (verifiedCourses) {
        console.log('\n📚 Courses in database:');
        verifiedCourses.forEach(c => {
            console.log(`   ${c.id}. ${c.title} - ${c.type === 'free' ? 'FREE' : 'KES ' + c.price}`);
        });
    }
    
    console.log('\n🎉 Upload complete!');
}

// Run the upload
uploadToSupabase();
