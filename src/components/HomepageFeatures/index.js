import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quantivine was designed to be easily installed and used to visualize quantum circuits
        written in Qiskit.
      </>
    ),
  },
  {
    title: 'Semantic Representation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Quantivine uses a semantic representation of quantum circuits to provide a
        more intuitive visualization of the circuit.
      </>
    ),
  },
  {
    title: 'Support for Large Circuits',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Quantivine supports large-scale quantum circuits with hundreds of qubits and
        thousands of gates.
      </>
    ),
  },
  {
    title: 'Interactive Experience',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Quantivine provides an interactive experience for visualizing quantum circuits and
        allows flexible customization of the circuit visualization.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
