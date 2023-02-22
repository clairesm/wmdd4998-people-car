import { Card } from 'antd';
import Link from 'antd/es/typography/Link';
import Cars from '../lists/Cars';
import { EditOutlined } from '@ant-design/icons';
import RemovePerson from '../buttons/RemovePerson';
import { useState } from 'react';
import UpdatePerson from '../forms/UpdatePerson';

const PersonCard = (props) => {
  const { id, firstName, lastName } = props;

  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
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
        <Cars />
        <Card style={{ marginTop: 16 }}>
          <Link onClick={handleButtonClick}>
            Learn More
          </Link>
        </Card>
        {editMode && (
          <UpdatePerson onButtonClick={handleButtonClick} />
        )}
      </Card>
    </div>
  );
};

export default PersonCard;
