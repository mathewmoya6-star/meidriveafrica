import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';

const SUPABASE_URL = 'https://jeksrwrzzrczamxijvwl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impla3Nyd3J6enJjemFteGlqdndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzYyMjAsImV4cCI6MjA5NDI1MjIyMH0.1poYpJKNFEVe2NTBkXBTH2bIHGk2yT8aqCU-OlJc4vs';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function App() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser();
        loadCourses();
    }, []);

    async function checkUser() {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
    }

    async function loadCourses() {
        try {
            const { data, error } = await supabase
                .from('courses')
                .select('*')
                .order('id', { ascending: true });
            
            if (error) throw error;
            setCourses(data || []);
        } catch (error) {
            console.error('Error loading courses:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Router>
            <Navbar user={user} />
            
            <Routes>
                <Route path="/" element={
                    <>
                        <section className="hero">
                            <div className="hero-content">
                                <h1>Practice Daily.<br /><span>Revise Smarter. Pass with Confidence.</span></h1>
                                <p>For Learners and Experienced Drivers — Refresh Your Skills with MEI DRIVE AFRICA. NTSA-approved courses.</p>
                                <div className="hero-buttons">
                                    <a href="#courses" className="btn-primary">Explore Courses</a>
                                    {!user && <a href="/login.html" className="btn-outline">Get Started</a>}
                                </div>
                            </div>
                        </section>

                        <div className="stats">
                            <div className="stats-container">
                                <div className="stat"><h2>10K+</h2><p>Students</p></div>
                                <div className="stat"><h2>{courses.length}</h2><p>Courses</p></div>
                                <div className="stat"><h2>98%</h2><p>Pass Rate</p></div>
                            </div>
                        </div>

                        <div className="container" id="courses">
                            <h2 className="section-title">Our <span>Courses</span></h2>
                            {loading ? (
                                <div className="loading">Loading courses...</div>
                            ) : (
                                <div className="courses-grid">
                                    {courses.slice(0, 6).map(course => (
                                        <CourseCard key={course.id} course={course} user={user} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                } />
            </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;
