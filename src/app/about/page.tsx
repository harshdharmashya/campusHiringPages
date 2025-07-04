import React from 'react'

export default function page() {
    return (
        <>
            <section className="bg-[#1e2a3c] text-white py-16 px-6 mt-[60px]">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h1 className="text-5xl font-bold">About CampusHiring</h1>
                    <p className="text-lg leading-relaxed">
                        CampusHiring is an AI‑powered placement platform connecting Indian universities and companies.
                        We help students land jobs—our clients boast up to 95% placement success.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white text-[#1e2a3c] p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
                            <p>
                                To develop competent skilful and socially responsible professional and making them to grow in readily changing world.
                            </p>
                        </div>

                        <div className="bg-white text-[#1e2a3c] p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-2">📈 Over Vision</h2>
                            <p>
                                To Provide Employment & Education hand on hand with sustainability.
                            </p>
                        </div>

                        <div className="bg-white text-[#1e2a3c] p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-2">🚀 Enduring Excellence</h2>
                            <p>
                                We hold ourselves to the highest standard, challenging and supporting each other to thrive in a world of rapid change.
                            </p>
                        </div>

                        <div className="bg-white text-[#1e2a3c] p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-2">📍 Intentional Inclusion</h2>
                            <p>
                                We connect across differences, acting with radical empathy and nurturing enduring relationships.
                            </p>
                        </div>

                        <div className="bg-white text-[#1e2a3c] p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-2">📍 Perpetual Discovery</h2>
                            <p>
                                We inspire lifelong curiosity, creating new knowledge through deep and meaningful thought and action.
                            </p>
                        </div>
                    </div>

                    <button className="mt-8 bg-[#cc1f2b] hover:bg-[#e0323f] text-white font-semibold py-3 px-8 rounded-full">
                        Learn More
                    </button>
                </div>
            </section>
        </>
    )
}
