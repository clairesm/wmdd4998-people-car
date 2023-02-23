import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useState } from 'react';
import RemoveCar from '../buttons/RemoveCar';
import UpdateCar from '../forms/UpdateCar';

const CarCard = (props) => {
  const { id, year, make, model, price, personId } = props;

  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title='Update Car'
          actions={[
            <EditOutlined
              key='edit'
              onClick={handleButtonClick}
            />,
            <RemoveCar id={id} />,
          ]}
        >
          <UpdateCar onButtonClick={handleButtonClick} />
        </Card>
      ) : (
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title={[
            year + ' ' + make + ' ' + model + ' → ' + price,
          ]}
          actions={[
            <EditOutlined
              key='edit'
              onClick={handleButtonClick}
            />,
            <RemoveCar id={id} />,
          ]}
        >
          {/* {year} {make} {model} → {price} */}
        </Card>
      )}
    </div>
  );
};

export default CarCard;
