import { Card } from 'antd';
import Link from 'antd/es/typography/Link';
import Cars from '../lists/Cars';
import { EditOutlined } from '@ant-design/icons';
import RemovePerson from '../buttons/RemovePerson';

const PersonCard = (props) => {
  const { id, firstName, lastName } = props;

  // const name = { firstName, lastName };
  return (
    <div>
      <Card
        title={[firstName, lastName]}
        actions={[
          <EditOutlined key='edit' />,
          <RemovePerson />,
        ]}
      >
        <Cars />
        <Card style={{ marginTop: 16 }}>
          <Link>Learn More</Link>
        </Card>
      </Card>
    </div>
  );
};

export default PersonCard;
