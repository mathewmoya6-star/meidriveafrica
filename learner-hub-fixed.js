import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const units = [
    {
        unit_number: 1,
        title: 'Introduction to Driving',
        description: 'Motor vehicles are an important part of our day-to-day living and provide a means for people and goods to be transported from one location to another.',
        content: 'The goal of driver training is ensure that you, as the driver, are equipped with the right knowledge of how to handle your vehicle and how to act appropriately when using the road. Most traffic accidents are caused by human error, however this can be easily prevented when the driver is adequately prepared for the traffic situation.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Beginner'
    },
    {
        unit_number: 2,
        title: 'Fundamental Driving Rules',
        description: 'The road is governed by rules and regulations that ensure order is maintained on the roads at all times.',
        content: 'The Traffic Act sets out the laws that govern the use of roads. The Highway Code provides guidelines for all road users. Key rules: Use horn only while moving, give right-of-way to emergency vehicles, respect pedestrian right of way, follow all traffic signs.',
        type: 'free',
        price: 0,
        duration: '3 hours',
        level: 'Beginner'
    },
    {
        unit_number: 3,
        title: 'Model Town',
        description: 'Understanding road networks through model town board simulation',
        content: 'Features: One way traffic road with white lines, two way traffic road with yellow center line, roundabout with 4 lanes and clockwise movement, parking zones (Angle and Flush), yellow kerb (no parking/stopping), pedestrian crossing, stop and give way signs.',
        type: 'free',
        price: 0,
        duration: '4 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 4,
        title: 'Human Factors in Traffic',
        description: 'Understanding how human behavior affects road safety',
        content: 'Topics: Observation techniques, health and safety, eyesight and vision, fatigue management, distractions (phones, radio, grooming), effects of alcohol and drugs, safety belt usage, theft prevention, road rage management.',
        type: 'free',
        price: 0,
        duration: '3 hours',
        level: 'Beginner'
    },
    {
        unit_number: 5,
        title: 'Vehicle Constructions and Controls',
        description: 'Learning about vehicle components and their functions',
        content: 'Components: Steering Wheel, Direction Indicator, Gear Lever, Hand Brake, Brake pedal, Accelerator, Clutch pedal, Rear-view Mirror, Side mirror, Speedometer, Temperature Gauge. Systems: Engine, Braking system, Steering system, Transmission system, Suspension system.',
        type: 'premium',
        price: 5000,
        duration: '5 hours',
        level: 'Beginner'
    },
    {
        unit_number: 6,
        title: 'Self-Inspection of Vehicle',
        description: 'Pre-journey vehicle inspection checklist',
        content: 'Exterior Inspection: Tyres (pressure, tread depth), Reflectors and lights, Mirrors, Windshield Wipers, Windows, Body condition, Cleanliness, Safety Belts, Emergency equipment, Paperwork. Interior Inspection: Brakes, Steering, Indicators, Transmission, Oil level, Coolant, Battery, Leaks.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Beginner'
    },
    {
        unit_number: 7,
        title: 'Observation',
        description: 'Mastering observation techniques for safe driving',
        content: 'Key concepts: Driver visibility (maximum distance to identify objects), Mirror usage (Rear view, exterior mirrors), Blind spot awareness (areas driver cannot directly observe), Nearside and offside mirrors, Proper mirror adjustment for optimal view, Hazard identification and anticipation.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 8,
        title: 'Vehicle Control',
        description: 'Practical vehicle control techniques',
        content: 'Skills: Driving preparation (seat adjustment, mirror adjustment), Starting and stopping procedures, Using gears (1st to 5th gear), Steering techniques (10-to-2 position, push-pull method), Parking at kerb, Types of parking (Angle, Flush, Parallel), Turning (J-turns, U-turns), Driving on bends and hills, Reversing techniques.',
        type: 'premium',
        price: 7500,
        duration: '6 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 9,
        title: 'Communication on the Road',
        description: 'Effective communication with other road users',
        content: 'Communication methods: MSM technique (Mirror, Signal, Manoeuvre), Hand signals by drivers (left turn, right turn, slowing down), Hand signals to traffic police, Light signals (indicators, brake lights, reverse lights), Traffic light signals (Red, Red+Amber, Green, Amber), Traffic signal blackout procedures.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 10,
        title: 'Speed Management',
        description: 'Managing speed for safe driving',
        content: 'Key concepts: The 4 Second Rule (following distance), Braking Distance (distance to stop after braking), Thinking Distance (distance during reaction time), Stopping Distance (thinking + braking distance), Braking Systems (disc, drum, handbrakes), Freewheeling risks (reduced control), Progressive braking technique.',
        type: 'premium',
        price: 5000,
        duration: '3 hours',
        level: 'Advanced'
    },
    {
        unit_number: 11,
        title: 'Space Management',
        description: 'Managing space around your vehicle',
        content: 'Road conditions: Open Condition (clear broad view), Closed Conditions (limited space, restricted view), Changing Conditions (speed limits, road surface changes). Techniques: Maintain safe following distance, Space envelope management, Space recovery when insufficient space, Position to "See and be seen".',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 12,
        title: 'Emergency Manoeuvres',
        description: 'Handling emergency situations on the road',
        content: 'Emergency procedures: Evasive turns (J-turns, U-turns), Brake failure (pump brakes, apply parking brake), Tyre blowout (firm grip, no sudden braking, gradual slow down), Headlight failure at night, Defensive driving techniques, Emergency stopping procedures.',
        type: 'premium',
        price: 5000,
        duration: '3 hours',
        level: 'Advanced'
    },
    {
        unit_number: 13,
        title: 'Skid Control and Recovery',
        description: 'Managing and recovering from vehicle skids',
        content: 'Types of skids: Front Wheel Skid (vehicle goes off intended course), Rear Wheel Skid (rear swings out), Aquaplaning (tyres lose contact on wet roads). Recovery: Take feet off accelerator, Release and gently reapply brakes, Turn steering wheel in desired direction, Counter-steer as needed.',
        type: 'premium',
        price: 5000,
        duration: '2 hours',
        level: 'Advanced'
    },
    {
        unit_number: 14,
        title: 'Adverse Driving Conditions',
        description: 'Driving safely in difficult weather and road conditions',
        content: 'Adverse conditions: Night driving (slow down, don\'t over-drive headlights), Fog (use low beams, patient driving), Heavy rain (increase following distance, avoid puddles), Extreme weather (hot, dusty, windy), Reduced traction on wet roads, Emergency steering methods, ABS braking techniques (plant and steer).',
        type: 'premium',
        price: 7500,
        duration: '4 hours',
        level: 'Advanced'
    },
    {
        unit_number: 15,
        title: 'Preventive Maintenance',
        description: 'Regular vehicle maintenance and troubleshooting',
        content: 'Maintenance types: Vehicle inspection, Lubrication, Adjustment, Cleaning, Testing, Repair. Common issues: Tyre/Steering (puncture, heavy steering, vibrations), Brakes (incorrect adjustment, wear), Warning lights (low brake fluid, component failure), Lights (bulb failure, fuse failure), Engine (misfiring, starting issues, overheating).',
        type: 'free',
        price: 0,
        duration: '3 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 16,
        title: 'Conditions of Carriage',
        description: 'Legal requirements for transporting goods and passengers',
        content: 'Conditions include: Customer rights and restrictions, Driver obligations to customers, Cargo handling requirements. For PSV vehicles: Statement of liability, Fare pricing, Exceptions, Code of conduct, Restricted items, Lost property procedures, Contact details.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 17,
        title: 'Hazardous Materials',
        description: 'Safe handling and transport of dangerous goods',
        content: '9 Classes of hazardous materials: Explosives, Gases, Flammable Liquids, Flammable Solids, Oxidizing Substances, Toxic & Infectious Substances, Radioactive Material, Corrosives, Miscellaneous Dangerous Goods. Requires special licensing from KBS, NEMA, and NTSA.',
        type: 'premium',
        price: 10000,
        duration: '4 hours',
        level: 'Advanced'
    },
    {
        unit_number: 18,
        title: 'Emergency Procedures',
        description: 'What to do in case of road accidents and emergencies',
        content: 'Steps at crash scene: Set reflector triangles (50m ahead and behind), Call emergency services, Move uninjured people to safety, Don\'t move injured unless immediate danger, Give First Aid using Dr. A.B.C (Danger, Response, Airway, Breathing, Circulation), Report accident to police.',
        type: 'free',
        price: 0,
        duration: '3 hours',
        level: 'Intermediate'
    },
    {
        unit_number: 19,
        title: 'Work Planning',
        description: 'Trip planning and time management for drivers',
        content: 'Planning factors: Distance to travel (co-driver for long trips), Time/Traffic conditions (avoid peak hours, night driving), Meal planning (familiar stops), Fatigue prevention (regular breaks, rest before journey), Adverse weather precautions, Legal limits (max 8 hours driving in 24 hours), Trip records.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Beginner'
    },
    {
        unit_number: 20,
        title: 'Customer Care',
        description: 'Professional conduct and customer service for drivers',
        content: 'Essential skills: Communication skills (patience, positive attitude, appropriate language), Handling customer expectations, Special needs customers, Sexual harassment prevention, Anti-discrimination, Personal hygiene, Time management, Stress management, Defensive riding techniques.',
        type: 'free',
        price: 0,
        duration: '2 hours',
        level: 'Beginner'
    },
    {
        unit_number: 21,
        title: 'The Examination - 1000 Quiz Bank',
        description: 'Comprehensive exam preparation with 1000 practice questions',
        content: 'Exam registration procedure through NTSA. Prepare for both practical and theory exams. Arrive on time at examination centre. Complete quiz bank covering all 20 previous units plus traffic signs, model town illustrations, and regulations.',
        type: 'premium',
        price: 2000,
        duration: '10 hours',
        level: 'Advanced'
    }
];

async function pushUnits() {
    console.log('📚 Pushing 21 units to Supabase courses table...\n');
    
    for (const unit of units) {
        try {
            const { error } = await supabase
                .from('courses')
                .upsert(unit, { onConflict: 'unit_number' });
            
            if (error) throw error;
            console.log(`✅ Unit ${unit.unit_number}: ${unit.title}`);
        } catch (error) {
            console.error(`❌ Unit ${unit.unit_number}: ${error.message}`);
        }
    }
    
    console.log('\n🎉 Complete! All units pushed to Supabase.');
    
    // Verify
    const { data, error } = await supabase
        .from('courses')
        .select('unit_number, title, type')
        .order('unit_number');
    
    if (data) {
        console.log('\n📊 Summary:');
        data.forEach(c => console.log(`   Unit ${c.unit_number}: ${c.title} (${c.type})`));
    }
}

pushUnits();
