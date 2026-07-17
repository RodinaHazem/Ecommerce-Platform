"use client";
import Spline from '@splinetool/react-spline';
import { Wrapper } from './SplineScene.styles';

export default function SplineScene({splineRef}) {
    return (
        <Wrapper ref={splineRef}>
            <Spline scene="https://prod.spline.design/k6BNz14-f6k0kZav/scene.splinecode" />
        </Wrapper>
    );
}
