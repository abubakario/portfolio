import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => {
  return (
    <Div>
      <svg className="BgAnimation__svg" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <defs>
          {/* 1. COOL GRADIENT (Cyan -> Blue) */}
          <linearGradient id="gradCool" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E0FF" />
            <stop offset="100%" stopColor="#0047FF" />
          </linearGradient>

          {/* 2. HOT GRADIENT (Purple -> Pink -> Orange) */}
          <linearGradient id="gradHot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#945DD6" />
            <stop offset="50%" stopColor="#F706CF" />
            <stop offset="100%" stopColor="#F9C80E" />
          </linearGradient>

          {/* Paths for reuse */}
          <path id="pathUp" d="M0 -1 L0.866 0.5 L-0.866 0.5 Z" />
          <path id="pathDown" d="M0 1 L-0.866 -0.5 L0.866 -0.5 Z" />
        </defs>

        {/* MASTER CENTER */}
        <g transform="translate(300, 300)">

          {/* LAYER 1: OUTER (Cool Gradient) */}
          <g className="spin-slow" opacity="0.3">
            <g transform="scale(280)">
              {/* Up Triangle (Clockwise) */}
              <g className="spin-self-cw">
                <use href="#pathUp" stroke="url(#gradCool)" strokeWidth="0.005" />
                {/* Node: Bright White to contrast against Blue */}
                <circle r="0.02" fill="white">
                  <animateMotion dur="20s" repeatCount="indefinite"><mpath href="#pathUp"/></animateMotion>
                </circle>
              </g>

              {/* Down Triangle (Counter-Clockwise) */}
              <g className="spin-self-ccw">
                <use href="#pathDown" stroke="url(#gradCool)" strokeWidth="0.005" />
                <circle r="0.02" fill="white">
                  <animateMotion dur="20s" begin="10s" repeatCount="indefinite"><mpath href="#pathDown"/></animateMotion>
                </circle>
              </g>
            </g>
          </g>

          {/* LAYER 2: MIDDLE (Hot Gradient) */}
          <g className="spin-medium" opacity="0.5">
            <g transform="scale(200)">
              {/* Up Triangle */}
              <g className="spin-self-cw">
                <use href="#pathUp" stroke="url(#gradHot)" strokeWidth="0.01" />
                {/* Node: Bright Cyan to contrast against Purple */}
                <circle r="0.025" fill="#00E0FF">
                  <animateMotion dur="15s" repeatCount="indefinite"><mpath href="#pathUp"/></animateMotion>
                </circle>
              </g>

              {/* Down Triangle */}
              <g className="spin-self-ccw">
                <use href="#pathDown" stroke="url(#gradHot)" strokeWidth="0.01" />
                <circle r="0.025" fill="#00E0FF">
                  <animateMotion dur="15s" begin="7s" repeatCount="indefinite"><mpath href="#pathDown"/></animateMotion>
                </circle>
              </g>
            </g>
          </g>

          {/* LAYER 3: INNER (Cool Gradient) */}
          <g className="spin-fast" opacity="0.7">
            <g transform="scale(120)">
              <g className="spin-self-cw">
                <use href="#pathUp" stroke="url(#gradCool)" strokeWidth="0.02" />
                <circle r="0.035" fill="#F9C80E">
                  <animateMotion dur="10s" repeatCount="indefinite"><mpath href="#pathUp"/></animateMotion>
                </circle>
              </g>
              <g className="spin-self-ccw">
                <use href="#pathDown" stroke="url(#gradCool)" strokeWidth="0.02" />
                <circle r="0.035" fill="#F9C80E">
                  <animateMotion dur="10s" begin="5s" repeatCount="indefinite"><mpath href="#pathDown"/></animateMotion>
                </circle>
              </g>
            </g>
          </g>

          {/* LAYER 4: CORE (Hot Gradient - No nodes, just energy) */}
          <g className="spin-turbo" opacity="0.9">
            <g transform="scale(60)">
              <g className="spin-self-cw">
                <use href="#pathUp" stroke="url(#gradHot)" strokeWidth="0.05" />
              </g>
              <g className="spin-self-ccw">
                <use href="#pathDown" stroke="url(#gradHot)" strokeWidth="0.05" />
              </g>
            </g>
          </g>

        </g>
      </svg>
    </Div>
  );
};

export default HeroBgAnimation;