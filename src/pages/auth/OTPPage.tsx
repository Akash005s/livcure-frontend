import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OTPPage: React.FC = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('OTP:', otp.join(''));
        // Verify OTP and redirect
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-[450px]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
                    <p className="text-gray-500">Enter the 4-digit code sent to your mobile</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex justify-between gap-2">
                        {otp.map((data, index) => (
                            <input
                                className="w-12 h-14 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-primary outline-none focus:ring-2 focus:ring-primary-light transition-all"
                                type="text"
                                name="otp"
                                maxLength={1}
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                                required
                            />
                        ))}
                    </div>

                    <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-primary text-white p-3 rounded-md font-semibold hover:bg-primary-dark transition-all w-full">
                        Verify
                    </button>

                    <div className="text-center mt-4 text-sm text-gray-500">
                        <p>
                            Didn't receive code?
                            <button type="button" className="text-primary font-semibold ml-1 cursor-pointer hover:underline">Resend OTP</button>
                        </p>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600">
                    <button
                        onClick={() => navigate('/signup')}
                        className="flex items-center justify-center w-full gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPPage;
