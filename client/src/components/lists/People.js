import { List } from 'antd';
import PersonCard from '../listitems/PersonCard';

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const People = () => {
  const styles = getStyles();
  return (
    <List
      grid={{ gutter: 20, column: 1 }}
      style={styles.list}
    >
      <List.Item>
        <PersonCard />
      </List.Item>
    </List>
  );
};

export default People;
