import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/scripts/layouts/Default';
import { Section } from '~/scripts/elements/Section';
import { HeadingLv1 } from '~/scripts/elements/Heading';

import { RootState, AppDispatch } from '~/scripts/stores';
import { fetchHistory } from '~/scripts/stores/history';

const HistoryPage: React.FC = () => {
  const data = useSelector((state: RootState) => state.history.data);
  const fetchHistoryStatus = useSelector((state: RootState) => state.history.fetchHistoryStatus);
  const isLoaded = useSelector((state: RootState) => state.history.isLoaded);
  const dispatch = useDispatch<AppDispatch>();

  console.log('履歴データ:', data, isLoaded);

  React.useEffect(() => {
    if (isLoaded) return;
    dispatch(fetchHistory());
  }, [dispatch]);

  let items;
  if (fetchHistoryStatus === '-1') {
    items = <div>データ取得エラー</div>;
  } else if (fetchHistoryStatus === '0') {
    items = <div>データ取得中</div>;
  } else if (fetchHistoryStatus === '1') {
    items = data.map((d, index) => {
      return (
        <div key={`data-${index}`}>
          <time dateTime={d.date}>{d.date}</time>
        </div>
      );
    });
  }

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>履歴</HeadingLv1>
        {items}
      </Section>
    </DefaultLayout>
  );
};

export default HistoryPage;
