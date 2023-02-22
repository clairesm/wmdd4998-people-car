import { Card } from 'antd';

const CarCard = (props) => {
  console.log('props', props);
  return (
    <div>
      <Card
        tyle={{ marginTop: 16 }}
        type='inner'
        title='Inner Card title'
      >
        Inner Card content
      </Card>
    </div>
  );
};

export default CarCard;
