import React from 'react';
import { PostSummary } from '..';
import { PostSummaryData } from '../../types';

type PostSummaryListProps = {
  summaries: PostSummaryData[];
};

const PostSummaryList = ({ summaries }: PostSummaryListProps) => (
  <main>
    {summaries.map(summary => (
      <PostSummary {...{ summary }} key={summary.node.id} />
    ))}
  </main>
);

export { PostSummaryList };
