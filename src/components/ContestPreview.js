import React from 'react';

// eslint-disable-next-line no-empty-pattern
const ContestPreview = (contest) => (
  <div className='ContestPreview'>
    <div>
      {contest.categoryName}
    </div>
    <div>
      {contest.contestName}
    </div>
  </div>
);

export default ContestPreview;