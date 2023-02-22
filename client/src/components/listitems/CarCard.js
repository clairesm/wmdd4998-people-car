import { Card } from 'antd';

const CarCard = (props) => {
  const { id, year, make, model, price, personId } = props;
  return (
    <div>
      <Card
        tyle={{ marginTop: 16 }}
        type='inner'
        title='Inner Card title'
      >
        {year} {make} {model} → {price}
      </Card>
    </div>
  );
};

export default CarCard;
