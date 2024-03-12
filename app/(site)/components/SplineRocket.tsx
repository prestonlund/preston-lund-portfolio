'use client'

import Spline from '@splinetool/react-spline';

export default function SplineRocket({ sceneId, onLoad, className }: any) {
    return (
        <Spline scene={sceneId} onLoad={onLoad} className={className} />
    )
}