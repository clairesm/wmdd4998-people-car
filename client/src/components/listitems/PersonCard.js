import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Cars from '../lists/Cars';
import { EditOutlined } from '@ant-design/icons';
import RemovePerson from '../buttons/RemovePerson';
import { useState } from 'react';
import UpdatePerson from '../forms/UpdatePerson';
import LearnMore from '../screens/LearnMore';

const PersonCard = (props) => {
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(
    props.firstName
  );
  const [lastName, setLastName] = useState(props.lastName);
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Card
        title={[firstName + ' ' + lastName]}
        actions={[
          <EditOutlined
            key='edit'
            onClick={handleButtonClick}
          />,
          <RemovePerson id={id} />,
        ]}
      >
        <Cars id={id} />
        <Card style={{ marginTop: 16 }}>
          <Link
            to={`/LearnMore/${id}`}
            id={`learn-more-${id}`}
          >
            Learn More
          </Link>
        </Card>
        {editMode && (
          <UpdatePerson
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            onButtonClick={handleButtonClick}
            updateStateVariable={updateStateVariable}
          />
        )}
      </Card>
    </div>
  );
};

export default PersonCard;
