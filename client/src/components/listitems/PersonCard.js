import { Card } from 'antd';
import Link from 'antd/es/typography/Link';

const PersonCard = (props) => {
  console.log('props', props);
  return (
    <div>
      <Card title='Card title'>
        <Card type='inner' title='Inner Card title'>
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title='Inner Card title'
        >
          Inner Card content
        </Card>
        <Card style={{ marginTop: 16 }}>
          <Link>Learn More</Link>
        </Card>
      </Card>
    </div>
  );
};

export default PersonCard;
