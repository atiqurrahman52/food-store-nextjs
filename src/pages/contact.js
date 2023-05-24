import ContactBanner from '@/components/contact/ContactBanner';
import ContactUs from '@/components/contact/ContactUs';
import Fqa from '@/components/shared/Fqa';
import React from 'react';

const contact = () => {
    return (
        <div>
            <ContactBanner />
            <ContactUs />
            <Fqa />
        </div>
    );
};

export default contact;