import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useState } from 'react';
import RemoveCar from '../buttons/RemoveCar';
import UpdateCar from '../forms/UpdateCar';

const CarCard = (props) => {
  const [id] = useState(props.id);
  const [year, setYear] = useState(props.year);
  const [make, setMake] = useState(props.make);
  const [model, setModel] = useState(props.model);
  const [price, setPrice] = useState(props.price);
  const [personId, setPersonId] = useState(props.personId);
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'year':
        setYear(value);
        break;
      case 'make':
        setMake(value);
        break;
      case 'model':
        setModel(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'personId':
        setPersonId(value);
        break;
      default:
        break;
    }
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
          <UpdateCar
            id={props.id}
            year={props.year}
            make={props.make}
            model={props.model}
            price={props.price}
            personId={props.personId}
            onButtonClick={handleButtonClick}
            updateStateVariable={updateStateVariable}
          />
        </Card>
      ) : (
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title={[
            year +
              ' ' +
              make +
              ' ' +
              model +
              ' → $' +
              Number(price).toLocaleString(),
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
