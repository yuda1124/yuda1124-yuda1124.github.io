import React from 'react';
import { PostSummary } from '..';
import { PostSummaryData, PRIMARY_COLOR } from '../../types';

type PostSummaryListProps = {
  summaries: PostSummaryData[];
};

const PostSummaryList = ({ summaries }: PostSummaryListProps) => {
  const primaryColorOptions = Object.values(PRIMARY_COLOR);
  const length = primaryColorOptions.length;
  return (
    <main>
      {summaries.map((summary, i) => {
        const color = primaryColorOptions[i % length];
        return <PostSummary {...{ summary, color }} key={summary.node.id} />;
      })}
    </main>
  );
};

export { PostSummaryList };
