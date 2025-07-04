import React from 'react'

export default function page() {
    return (
        <>
            <main className="bg-[#f5f7f9] text-[#1e2a3c] min-h-screen px-6 py-12 mt-[60px]">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-[#cc1f2b]">
                        Privacy Policy
                    </h1>

                    <p className="mb-6">
                        At <span className="font-semibold">RE Eduversity</span>, we are committed to protecting your privacy and ensuring the
                        security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the
                        information you provide when using our LinkedIn lead generation form, as well as your rights regarding that information.
                    </p>

                    <p className="mb-6">
                        By accessing or using our lead generation form, you acknowledge that you have read, understood, and agreed to the terms and
                        practices described in this Privacy Policy.
                    </p>
                    <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#27aae1]">Information We Collect</h2>
                    <p className="mb-4">When you use our LinkedIn lead generation form, we may collect the following types of information:</p>

                    <h3 className="text-xl font-semibold mb-2 text-[#1e2a3c]">Personal Information</h3>
                    <ul className="list-disc list-inside text-[15px] space-y-1 text-gray-800">
                        <li>Name</li>
                        <li>Email Address</li>
                        <li>Contact Number</li>
                        <li>LinkedIn profile link</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 text-[#1e2a3c] mt-3">Additional Information:</h3>
                    <ul className="list-disc list-inside text-[15px] space-y-1 text-gray-800">
                        <li>Educational background</li>
                        <li>Work experience</li>
                        <li>Skills and qualifications</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 text-[#1e2a3c] mt-3">Use of Information</h3>
                    <p className='text-[15px]'>We may use the information we collect for the following purposes:</p>
                    <ul className="list-disc list-inside text-[15px] space-y-1 text-gray-800 mt-2">
                        <li><span className='font-semibold'>Internship and Job Opportunities: </span>Matching you with relevant opportunities based on your qualifications and interests.</li>
                        <li><span className='font-semibold'>Employer Engagement: </span>Connecting employers with potential candidates who meet their job requirements.</li>
                        <li><span className='font-semibold'>Communication: </span>Sending updates, notifications, and relevant information about our services.</li>
                        <li><span className='font-semibold'>Service Improvement: </span>Analyzing collected information to enhance user experience and develop new features.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#27aae1]">Data Sharing and Disclosure</h2>
                    <p className="mb-4">Your information is important, and we do not sell, rent, or lease it to third parties for marketing purposes. However, it may be shared under the following circumstances:</p>
                    <ul className="list-disc list-inside text-[15px] space-y-1 text-gray-800 mt-2">
                        <li><span className='font-semibold'>Third-Party Service Providers: </span>To assist in delivering our services, bound by confidentiality agreements.</li>
                        <li><span className='font-semibold'>Legal Requirements: </span>If required by law or to protect our rights and safety, as well as the safety of others.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#27aae1]">Changes to this Privacy Policy</h2>
                    <p className="mb-6">
                        We reserve the right to modify this policy at any time. Changes take effect immediately upon posting, so please review this
                        document periodically.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#27aae1]">Contact Us</h2>
                    <p className="mb-6">
                        For any questions or concerns regarding this policy:
                    </p>
                    <ul className="list-disc list-inside text-[15px] space-y-1 text-gray-800 mt-2">
                        <li><span className='font-semibold'>Address: </span>A-152/A St. No. 8, Meet Nagar, Delhi 110094</li>
                        <li><span className='font-semibold'>Email: </span>info@reeduversity.com</li>
                        <li><span className='font-semibold'>Phone: </span> +91 83684 58738</li>
                    </ul>
                </div>
            </main>
        </>
    )
}
