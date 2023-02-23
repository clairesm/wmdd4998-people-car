import { Card } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { List } from 'antd';
import { GET_CARS, GET_PERSON_BY_ID } from '../../queries';
import CarCard from '../listitems/CarCard';

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const LearnMore = (props) => {
  const styles = getStyles();
  const { id } = useParams();

  const {
    loading: personLoading,
    error: personError,
    data: personData,
  } = useQuery(GET_PERSON_BY_ID, {
    variables: { id },
  });

  const {
    loading: carsLoading,
    error: carsError,
    data: carsData,
  } = useQuery(GET_CARS);

  if (personLoading || carsLoading) return 'Loading...';
  if (personError) return `Error! ${personError.message}`;
  if (carsError) return `Error! ${carsError.message}`;

  const person = personData.person;
  const filteredCars = carsData.cars.filter(
    (car) => car.personId === id
  );

  return (
    <div>
      <Link to='/'> ← HOME</Link>
      <Card
        title={[person.firstName + ' ' + person.lastName]}
      >
        <List
          grid={{ gutter: 20, column: 1 }}
          style={styles.list}
        >
          {filteredCars.map(
            ({
              id,
              year,
              make,
              model,
              price,
              personId,
            }) => (
              <List.Item key={id}>
                <CarCard
                  key={id}
                  id={id}
                  year={year}
                  make={make}
                  model={model}
                  price={price}
                  personId={personId}
                />
              </List.Item>
            )
          )}
        </List>
      </Card>
    </div>
  );
};

export default LearnMore;
