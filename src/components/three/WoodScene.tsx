"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLenis } from "@/hooks/useLenis";

export default function WoodScene() {
    const mountRef = useRef<HTMLDivElement>(null);
    const { lenis } = useLenis();

    useEffect(() => {
        if (!mountRef.current) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        scene.background = null; // Transparent

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // SIMPLE PARTICLES (Wood Dust)
        const particleCount = 400;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const speeds = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 25; // spread X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // spread Y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // spread Z
            speeds[i] = Math.random() * 0.005 + 0.002;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Warm wood color #C6A97A with glow
        const material = new THREE.PointsMaterial({
            color: 0xC6A97A,
            size: 0.06,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true, // size scales with distance
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // MOUSE PARALLAX
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ANIMATION LOOP
        let requestID: number;
        const animate = () => {
            requestID = requestAnimationFrame(animate);

            // Gentle float
            const positions = particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3 + 1] -= speeds[i]; // fall down
                if (positions[i * 3 + 1] < -12) {
                    positions[i * 3 + 1] = 12; // reset to top
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Rotation
            particles.rotation.y += 0.001;

            // Parallax Interaction
            particles.rotation.x += (mouseY - particles.rotation.x) * 0.05;
            particles.rotation.y += (mouseX - particles.rotation.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            cancelAnimationFrame(requestID);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />
    );
}
