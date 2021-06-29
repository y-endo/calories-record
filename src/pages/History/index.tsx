import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/shared/layouts/Default';
import { Section } from '~/shared/components/Section/style';
import { HeadingLv1 } from '~/shared/components/Heading/style';
import Table from '~/shared/components/Table';

import { RootState, AppDispatch } from '~/shared/stores';
import { fetchHistory } from '~/shared/stores/history';

const HistoryPage: React.FC = () => {
  const historyData = useSelector((state: RootState) => state.history.data);
  const fetchHistoryStatus = useSelector((state: RootState) => state.history.fetchHistoryStatus);
  const isLoaded = useSelector((state: RootState) => state.history.isLoaded);
  const dispatch = useDispatch<AppDispatch>();

  console.log('履歴データ:', historyData, isLoaded);

  React.useEffect(() => {
    if (isLoaded) return;
    dispatch(fetchHistory());
  }, [dispatch]);

  let view;
  if (fetchHistoryStatus === '-1') {
    view = <div>データ取得エラー</div>;
  } else if (fetchHistoryStatus === '0') {
    view = <div>データ取得中</div>;
  } else if (fetchHistoryStatus === '1' && historyData) {
    const time: { [key: string]: string } = { breakfast: '朝食', lunch: '昼食', dinner: '夕食' };
    const header = ['日付', '時間', 'カロリー（kcal）', '炭水化物（g）', 'タンパク質（g）', '脂質（g）'];
    const rows = historyData.map(d => [d.date, time[d.time], d.calorie, d.carbs, d.protein, d.fat]);
    view = <Table header={header} rows={rows} />;
  }

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>履歴</HeadingLv1>
        {view}
      </Section>
    </DefaultLayout>
  );
};

export default HistoryPage;
