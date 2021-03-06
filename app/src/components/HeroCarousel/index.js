/**
* By Ryan Collins
* @Date:   2016-08-16T19:55:57-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:12-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet/components/Carousel';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';

class HeroCarousel extends Component {
  render() {
    const {
      restaurants,
    } = this.props;
    return (
      <div className={styles.heroCarousel}>
        <div className={styles.overlay}>
          <Headline className={styles.headline} align="center" size="large">
            Restaurant Reviewer
          </Headline>
          <Headline className={styles.headline} align="center" size="medium">
            Accessibility App
          </Headline>
        </div>
        <Carousel>
          {restaurants.map((item, index) =>
            <div key={index} className={styles.carousel}>
              <img
                src={item.src}
                alt={item.caption}
                className={styles.image}
              />
            </div>
          )}
        </Carousel>
      </div>
    );
  }
}

HeroCarousel.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(HeroCarousel, styles);
