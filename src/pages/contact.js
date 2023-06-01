import ContactBanner from '@/components/contact/ContactBanner';
import ContactUs from '@/components/contact/ContactUs';
import Fqa from '@/components/shared/Fqa';
import Head from 'next/head';
import React from 'react';

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactBanner />
            <ContactUs />
            <Fqa />
        </div>
    );
};

export default contact;