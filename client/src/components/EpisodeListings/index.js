import React from 'react';
import _ from 'lodash';

import EpisodeListing from '../EpisodeListing';

const EpisodeListings = props => (
  <div className={props.right}>
    {_.map(props.categories, (category, key) => (
       <div key={key}>
         <div className='category'></div>
         <EpisodeListing updateVideo={props.updateVideo} updateEpisode={props.updateEpisode} channel={props.data[category]} />
       </div>
     ))}
  </div>
);

export default EpisodeListings;
