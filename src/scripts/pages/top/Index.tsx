import * as React from 'react';

import DefaultLayout from '~/scripts/layouts/Default';
import { Section } from '~/scripts/elements/Section';
import { HeadingLv1 } from '~/scripts/elements/Heading';

import IMeal from '~/scripts/interfaces/IMeal';

const TopPage: React.FC = () => {
  const [data, setData] = React.useState<IMeal[]>();

  console.log('今日のデータ:', data);

  React.useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
        now.getDate()
      ).padStart(2, '0')}`;
      const res = await fetch(`/api/get-meal/${today}`);
      const json = await res.json();
      if (!unmounted) setData(json);
    };
    getData();

    const cleanUp = () => {
      unmounted = true;
    };

    return cleanUp;
  }, []);

  if (!data) return null;

  const sumCalories = {
    all: 0,
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    other: 0
  };
  const foods = {
    breakfast: '',
    lunch: '',
    dinner: '',
    other: ''
  };
  data.forEach(d => {
    sumCalories.all += parseInt(d.calorie, 10);
    sumCalories[d.time] += parseInt(d.calorie, 10);

    foods[d.time] = d.food;
  });
  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>今日の摂取カロリー</HeadingLv1>
        <p>合計: {sumCalories.all}kcal</p>
        <div>
          <dl>
            <dt>朝食</dt>
            <dd>
              <pre>{foods.breakfast}</pre>
            </dd>
          </dl>
          <p>{sumCalories.breakfast}kcal</p>
        </div>
        <div>
          <dl>
            <dt>昼食</dt>
            <dd>
              <pre>{foods.lunch}</pre>
            </dd>
          </dl>
          <p>{sumCalories.lunch}kcal</p>
        </div>
        <div>
          <dl>
            <dt>夕食</dt>
            <dd>
              <pre>{foods.dinner}</pre>
            </dd>
          </dl>
          <p>{sumCalories.dinner}kcal</p>
        </div>
        <div>
          <dl>
            <dt>間食</dt>
            <dd>
              <pre>{foods.other}</pre>
            </dd>
          </dl>
          <p>{sumCalories.other}kcal</p>
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default TopPage;
