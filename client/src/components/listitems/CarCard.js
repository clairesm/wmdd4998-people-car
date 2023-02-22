import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import RemoveCar from '../buttons/RemoveCar';

const CarCard = (props) => {
  const { id, year, make, model, price, personId } = props;
  return (
    <div>
      <Card
        tyle={{ marginTop: 16 }}
        type='inner'
        title='Inner Card title'
        actions={[
          <EditOutlined key='edit' />,
          <RemoveCar />,
        ]}
      >
        {year} {make} {model} → {price}
      </Card>
    </div>
  );
};

export default CarCard;
