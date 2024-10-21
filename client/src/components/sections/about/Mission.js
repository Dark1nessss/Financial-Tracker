import React from 'react';

const Mission = () => {
  return (
    <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
            {/* Section Title */}
            <h2 className="text-5xl font-bold mb-8 text-left">
            Mission & <span className="text-[#A5E404]">Vision</span>
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-lg text-left text-[#C4C4C4] mb-12 leading-relaxed max-w-7xl">
            We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission Section */}
            <div className="relative max-w-[350px] max-h-[350px] bg-[#1c1c1c] flex justify-center items-center rounded-lg">
                {/* Mesh Background */}
                <img src="/mesh_img.png" className="absolute inset-0 w-full h-full object-cover" alt="Mesh Background" />
                {/* Image Centered */}
                <img src="/plant_img.png" className="relative rounded-lg w-[90%] h-[90%] object-contain self-end" alt="Plant" />
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-4 text-left text-white">Mission</h3>
                <p className="text-lg text-left text-[#C4C4C4] leading-relaxed">
                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partners, helping them navigate their financial journey and realize their dreams.
                </p>
            </div>

            {/* Vision Section */}
            <div>
                <h3 className="text-3xl font-bold mb-4 text-left text-white">Vision</h3>
                <p className="text-lg text-left text-[#C4C4C4] leading-relaxed">
                Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                </p>
            </div>
            <div className="relative max-w-[350px] max-h-[350px] bg-[#1c1c1c] flex justify-center items-center rounded-lg">
                {/* Background Mesh */}
                <img src="/mesh_img.png" className="absolute inset-0 w-full h-full object-cover" alt="Mesh Background" />
                {/* Main Image */}
                <img src="/eye_img.png" className="relative rounded-lg w-[90%] h-[90%] object-contain self-end" alt="Eye" />
            </div>
            </div>
        </div>
    </section>
  );
};

export default Mission;