import React from 'react';

import styles from './General.module.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
    children: React.ReactNode;
}

export default function GeneralLayout(props: Props) {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.children}>{props.children}</div>
            <Footer />
        </div>
    );
}
