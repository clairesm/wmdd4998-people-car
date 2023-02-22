import { Card } from 'antd';
import Link from 'antd/es/typography/Link';
import Cars from '../lists/Cars';

const PersonCard = (props) => {
  console.log('props', props);
  return (
    <div>
      <Card title='Card title'>
        <Cars />
        <Card style={{ marginTop: 16 }}>
          <Link>Learn More</Link>
        </Card>
      </Card>
    </div>
  );
};

export default PersonCard;
