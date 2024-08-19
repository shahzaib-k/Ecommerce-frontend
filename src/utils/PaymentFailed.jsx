import React from 'react';
import { Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

const PaymentFailed = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FiXCircle className="mx-auto h-16 w-16 text-red-600" />
                <h2 className="mt-4 text-2xl font-semibold text-red-600">Payment Failed</h2>
                <p className="mt-2 text-gray-600">Unfortunately, your payment could not be processed. Please try again.</p>
                <Link to="/cart" className="mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    Try Again
                </Link>
            </div>
        </div>
    );
};

export default PaymentFailed;
