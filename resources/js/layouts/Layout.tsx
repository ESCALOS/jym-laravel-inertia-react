import CallAction from '@/components/CallAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Nabvar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                {children}
                <CallAction/>
            </main>
            <Footer />
        </div>
    );
}
