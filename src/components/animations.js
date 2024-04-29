import { useEffect } from "react";


export default function useFadeLeft() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-left');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        const element = document.querySelector('.observe-fade-in');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
};