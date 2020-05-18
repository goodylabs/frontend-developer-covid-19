import React from 'react'
import styles from './Loader.module.css'

const Loader = () => (
  <div className={ styles.Loader }>
    <svg className={ styles.Svg } width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle className={ styles.Circle } cx="50" cy="50" r="20.9592" fill="none" stroke="#0a0a0a" strokeWidth="44">
        <animate className={ styles.Animate } attributeName="r" repeatCount="indefinite" dur="1s" values="0;23" keyTimes="0;1" keySplines="0 0.2 0.8 1"  calcMode="spline" begin="-0.5s"  />
        <animate className={ styles.Animate } attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s" />
      </circle>
      <circle className={ styles.Circle } cx="50" cy="50" r="10.5616" fill="none" stroke="#28292f" strokeWidth="44">
        <animate className={ styles.Animate } attributeName="r" repeatCount="indefinite" dur="1s" values="0;23" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"  />
        <animate className={ styles.Animate } attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"  />
      </circle>
    </svg>
  </div>
)

export default Loader
