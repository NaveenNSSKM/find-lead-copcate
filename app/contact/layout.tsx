import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | FindLead.ai',
    description: 'Get in touch with the FindLead.ai team for support, demos, or general inquiries.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
